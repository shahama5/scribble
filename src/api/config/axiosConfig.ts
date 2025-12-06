import { BaseUrl } from "@/src/utils/BaseUrl";
import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: BaseUrl,
  headers: { "Content-Type": "application/json" },
});

// axiosConfig.interceptors.request.use(async (config) => {
//   let token;

//   if (typeof window !== "undefined") {
//     token = localStorage.getItem("accessToken");
//   } else {
//     const { cookies } = await import("next/headers");
//     token = (await cookies()).get("accessToken")?.value;
//   }

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });
export default axiosConfig;