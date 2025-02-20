// apiClient.js
import axios from "axios";
import { config } from "../config";

// 기본 설정
const apiClient = axios.create({
  baseURL: config.apiUrl, // API의 기본 URL
  timeout: 10000, // 요청 타임아웃 (ms)
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키와 자격 증명을 함께 전송
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 쿠키는 자동으로 포함되므로 별도 설정 필요 없음
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
        window.location.href = "/login/login"; // 로그인 페이지로 이동
    }

    if (error.response) {
      console.error("API Error:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
