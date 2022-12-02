import axios from "axios";


export const uploadImages = async (formData, path, token) => {

  try {
    const { data } = await axios.post(
      `${"https://y2kk.tk"}/uploadImages`,
      formData,
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     "content-type": "multipart/form-data",
      //   },
      // }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};