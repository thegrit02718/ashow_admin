import { AptBasicInfoType } from "../types/types";
import imageCompression from "browser-image-compression";

interface ImageObject {
  [key: string]: File[];
}

//날짜 관련 앞자리 없애는 함수
export const modifyDateHandler = (date: string, state: AptBasicInfoType) => {
  if (date == undefined || date == "") return;
  const [year, month] = state.inDate.split(".", 2);

  if (month[0] == "0") {
    const modifiedMonth = month.slice(1, 2);
    const modifiedDate = `${year}.${modifiedMonth}`;
    return modifiedDate;
  }

  return state.inDate;
};

// 현재 탭 내부에 이미지들을 formData에 담아줄 함수
export const ImageUploadhandler = async (
  imageObject: ImageObject,
  typeMappings: Record<string, string>,
  formData: FormData
) => {
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1024,
  };

  // Object.entries > [키,값]
  for (const [type, images] of Object.entries(imageObject)) {
    const convertedFiles = await Promise.all(
      images.map(async (url, index) => {
        const compressedFile = await imageCompression(url, options);
        const fileName = `${typeMappings[type]}${index + 1}.png`;

        return new File([compressedFile], fileName, {
          type: "image/png",
        });
      })
    );

    convertedFiles.forEach((file) => {
      formData.append("img", file);
    });
  }
};
