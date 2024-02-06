import { useState } from "react";
import imageCompression from "browser-image-compression";

interface ImageCompressResult {
  compressImage: (imageFile: File) => Promise<File | undefined>;
  isLoading: boolean;
}

const useImageCompress = (): ImageCompressResult => {
  const [isLoading, setIsLoading] = useState(false);

  const compressImage = async (imageFile: File) => {
    if (isLoading) return;

    setIsLoading(true);

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1024,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);

      setIsLoading(false);

      return compressedFile;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return { compressImage, isLoading } as const;
};

export default useImageCompress;
