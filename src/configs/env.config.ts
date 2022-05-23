const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const API_URL_BACKEND =
  process.env.NEXT_PUBLIC_API_URL_BACKEND || "http://localhost:3000";

export const envConfig = {
  BASE_URL,
  API_URL_BACKEND,
};
