"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchForm({ initialSearch }: { initialSearch: string }) {
  const [tagName, settagName] = useState(initialSearch ?? "");
  const router = useRouter();
  useEffect(() => {
    settagName(initialSearch);
  }, [initialSearch]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
        router.refresh();
      }}
    >
      <Label htmlFor="tag-name" className="text-right">
        Search by Tags
      </Label>
      <div className="flex gap-4">
        <Input
          onChange={(e) => settagName(e.currentTarget.value)}
          id="tag-name"
          value={tagName}
        />
        <Button>Search</Button>
      </div>
    </form>
  );
}
