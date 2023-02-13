import axios from "axios";

export const getAllItems = async (path:any): Promise<any> => {
  try {
    const response = await axios.get("https://api-dlwalt.glitch.me/getall", {
      params: {
        path: path,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
