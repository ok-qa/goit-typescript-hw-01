import axios, { AxiosResponse } from "axios";

async function fetchData(url: string): Promise<AxiosResponse<object> | never> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`You got the error from ${url}: ${error}`);
  }
}

export default fetchData;
