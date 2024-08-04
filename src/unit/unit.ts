import CryptoJS from "crypto-js";
const secretKeyApi = import.meta.env.VITE_SECRET_KEY_API;

export const encryptPassword = (password: string): string => {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
};

export const encryptAPI = (value: string): string => {
    return CryptoJS.AES.encrypt(value, secretKeyApi).toString();
};