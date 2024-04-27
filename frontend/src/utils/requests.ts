import axios from "axios";

export const postRequest = async (url: string, data: FormData) => {
  try {
    const response = await axios.post(url, data,{
        headers: {
            'Content-Type': 'multipart/form-data', 
          }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};