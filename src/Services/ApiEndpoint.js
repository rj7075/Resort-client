import axios from "axios";

const instance = axios.create({
  baseURL: "https://resortsbooking-server3.onrender.com",
  withCredentials: true,
});

// ✅ GET request
export const get = (url, params) => instance.get(url, { params });

// ✅ POST request (handles JSON & FormData automatically)
export const post = (url, data) =>
  instance.post(url, data, {
    headers:
      data instanceof FormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
  });

// ✅ PUT request (handles JSON & FormData automatically)
export const put = (url, data) =>
  instance.put(url, data, {
    headers:
      data instanceof FormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
  });

// ✅ DELETE request
export const deletusers = (url) => instance.delete(url);

// (Optional) ✅ PATCH request if you need partial updates
export const patch = (url, data) =>
  instance.patch(url, data, {
    headers:
      data instanceof FormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
  });

// 🔹 Request interceptor (attach token)
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response interceptor
instance.interceptors.response.use(
  (response) => {
    console.log("interceptor response", response);
    return response;
  },
  (error) => {
    console.log("interceptor error", error);
    return Promise.reject(error);
  }
);

export default instance;
