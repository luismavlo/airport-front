import axios from 'axios';

export const httpClient = {
  get: async (url) => {
    const { data } = await axios.get(url)
    return data;
  },
  post: async (url, info) => {
    const { data } = await axios.post(info)
    return data
  },
  patch: async(url, info) => {
    const { data } = await axios.patch(url, info);
    return data;
  },
  delete: async(url) => {
    const { data } = await axios.delete(url);
    return data;
  }
}