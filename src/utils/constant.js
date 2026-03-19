const BASE_URL = import.meta.env.VITE_API_URL;

console.log("Using API URL:", BASE_URL);

export const getApiBaseUrl = () => BASE_URL;

export const USER_API_END_POINT = `/user`;
export const JOB_API_END_POINT = `/jobs`;
export const APPLICATION_API_END_POINT = `/user`;
export const RECRUITER_API_END_POINT = `/recruiter/auth`;