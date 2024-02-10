"use server";
import Cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
export async function setAsFavouriteAction(
    public_Id: string,
    isFavorite: boolean,
    path: string) {
    if (isFavorite) {
      await Cloudinary.v2.uploader.add_tag("favorite", [public_Id]); // Adding the "favorite" tag
    } else {
      await Cloudinary.v2.uploader.remove_tag("favorite", [public_Id]); // Removing the "favorite" tag
    }
    await new Promise((resolve) => setTimeout(resolve, 1500));
    revalidatePath(path);
  }
  
