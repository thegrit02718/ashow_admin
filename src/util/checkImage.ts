import { ALLOW_FILE_EXTENSION, checkFileValidity } from "../util/checkFile";
import { ChangeEvent } from "react";
import React from "react";
import imageCompression from "browser-image-compression";

export const handleAddImage = (
  category: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  const inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = ALLOW_FILE_EXTENSION;

  inputElement.click();

  inputElement.addEventListener("change", async (e) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      handleFileUpload(file, category, state, setState);
    }
  });
};

export const handleDeleteImage = (
  index: number,
  category: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  const FileList = [...state.file[category]];
  const ImageList = [...state.image[category]];
  const ImageSizeList = [...state.imageSize[category]];
  const deleteSizeList = ImageSizeList.filter((_, idx) => idx !== index);
  const updateList = ImageList.filter((_, idx) => idx !== index);
  const deleteFileList = FileList.filter((_, idx) => idx !== index);
  setState((prev: any) => ({
    ...prev,
    file: { ...state.file, [category]: deleteFileList },
    image: { ...state.image, [category]: updateList },
    imageSize: { ...state.imageSize, [category]: deleteSizeList },
  }));
};

export const handleFileUpload = async (
  file: File,
  category: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  if (!checkFileValidity(category, file)) {
    return;
  }

  try {
    setState((prev: any) => ({
      ...prev,
      file: {
        ...state.file,
        [category]: [...state.file[category], file],
      },
    }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const source = reader.result as string;

        const updatedImageCategory = {
          ...state.image,
          [category]: [...state.image[category], source],
        };

        const imageSizeList = [
          ...state.imageSize[category as keyof typeof state.imageSize],
          file.size, // 이미지 크기를 리사이징된 파일의 크기로 업데이트
        ];

        setState((prev: any) => ({
          ...prev,
          image: updatedImageCategory,
          imageSize: {
            ...state.imageSize,
            [category]: imageSizeList,
          },
        }));
      };
      reader.readAsDataURL(file); // 리사이징된 파일을 읽어옴
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleUpdateImage = (
  e: ChangeEvent<HTMLInputElement>,
  index: number,
  category: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  const file = e.target.files?.[0];

  if (file) {
    checkFileValidity(category, file);
    const reader = new FileReader();

    reader.onloadend = () => {
      const source = reader.result as string;
      const ImageList = [...state.image[category]];
      const updateList = ImageList.map((item, i) =>
        i === index ? source : item
      );

      const size = file.size;
      const currentSizeList = [...state.imageSize[category]];
      if (currentSizeList[index]) {
        currentSizeList[index] = size;
      } else {
        currentSizeList.push(size);
      }

      setState((prev: any) => ({
        ...prev,
        image: {
          ...prev.image,
          [category]: [...updateList],
        },
        imageSize: {
          ...prev.imageSize,
          [category]: [...currentSizeList],
        },
      }));
    };
    reader.readAsDataURL(file);
  }
};
