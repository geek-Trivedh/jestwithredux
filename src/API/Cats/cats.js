import axios from 'axios';

export const getCats = async () => {
  const response = await axios.get('https://api.thecatapi.com/v1/breeds');
  return response;
};
