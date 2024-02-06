import { instance } from "./baseApi";
import { PyeongType, basicInfoType } from "../types/types";

export const postBasicInfoApi = async (
  request: basicInfoType,
  formData: FormData
) => {
  try {
    const res = await instance.post("/buildingsadmin/defaultinfo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: {
        request,
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
export const postPyengInfoApi = async (
  request: PyeongType,
  formData: FormData
) => {
  try {
    const res = await instance.post("/buildingsadmin/pyenginfo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: {
        request,
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
