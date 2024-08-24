export const MAIN_URL = 'https://anturium.online';
export const ANTURIUM_STORE_KEY = 'anutium_key';

export const API_URL = () => {
  return import.meta.env.VITE_API_URL;
}

export const HEADER_PARAMETERS = {
  content: {
    key: "Content-Type",
    body: 'application/json'
  },
  accept: {
    key: 'Accept',
    body: 'application/json'
  },
  authorization: {
    key: 'Authorization',
    body: 'Bearer'
  }
}
