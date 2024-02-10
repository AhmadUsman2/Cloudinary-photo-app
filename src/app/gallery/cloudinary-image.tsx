"use client"

import FullHeart from '@/components/ui/icons/full-heart';
import Heart from '@/components/ui/icons/heart';
import { CldImage } from 'next-cloudinary';
import { useState, useTransition } from 'react'; // Import useState hook
import { setAsFavouriteAction } from './actions';
import { SearchResult } from './page';

export default function CloudinaryImage(props: any & { imageData: SearchResult; path: string }) {
  const [transition, startTransition] = useTransition();
  const { imageData } = props;
  const [isFavorited, setIsFavorited] = useState(imageData.tags?.includes("favorite")); // Manage favorite state locally

  const handleFavoriteClick = async () => {
    startTransition(() => {
      const newFavoriteStatus = !isFavorited; // Toggle favorite status
      if (newFavoriteStatus) {
        setAsFavouriteAction(imageData.public_id, true, props.path); // Set as favorite
      } else {
        setAsFavouriteAction(imageData.public_id, false, props.path); // Remove from favorites
      }
      setIsFavorited(newFavoriteStatus); // Update local state
    });
  }; 

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={handleFavoriteClick} // Use handleFavoriteClick instead of directly calling setAsFavouriteAction
          className="absolute top-2 right-2 hover:text-white text-red-800 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={handleFavoriteClick} // Use handleFavoriteClick instead of directly calling setAsFavouriteAction
          className="absolute top-2 right-2 hover:text-red-800 cursor-pointer"
        />
      )}
    </div>
  );
}
