import { instance } from "./baseApi";

export const createPostApi = async (request, formData) => {
  console.log(formData);
  try {
    const res = await instance.post("/buildings/buildings", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: {
        request,
      },
    });
    console.log(res, "res");
  } catch (error) {
    throw Error(error);
  }
};
