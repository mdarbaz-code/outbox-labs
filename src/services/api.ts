import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getJson<T>(url: string) {
  const response = await api.get<T>(url);
  return response.data;
}
