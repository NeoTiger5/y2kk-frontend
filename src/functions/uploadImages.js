import axios from "axios";


export const uploadImages = async (formData, path, token) => {

  try {
    const { data } = await axios.post(
      `${"http://52.66.200.225"}/uploadImages`,
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