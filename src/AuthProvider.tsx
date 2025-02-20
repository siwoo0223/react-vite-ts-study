import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { autoLoginApi, logoutApi } from "./api/login/login";
import { login, logout } from "./store/slices/loginSlice";

// AuthContext의 타입 정의
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}

// Context 기본값 (null 허용)
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

// Context Provider 컴포넌트
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // 인증 상태 저장
  const dispatch = useDispatch();
  const autoSignIn = autoLoginApi();
  const signOut = logoutApi();

  useEffect(() => {
    const isFirstVisit = window.performance.navigation.type === 0; // 첫 방문
    const autoLogin = async () => {
      try {
        const res = await autoSignIn.mutateAsync(); // 서버와 통신
        if (res?.autoLoginFlag) {
          dispatch(login(res)); // 로그인 처리
        } else {
          await signOut.mutateAsync(); // 로그아웃 처리
          dispatch(logout());
        }
        setIsAuthenticated(true); // 인증 성공 시 상태 업데이트
      } catch (error) {
        console.error("자동 로그인 중 에러 발생:", error); // 에러 출력
        setIsAuthenticated(false); // 인증 실패 시 상태 초기화
      }
    };
    // 첫 방문일 때만 실행
    if (isFirstVisit) {
      autoLogin();
    }
  }, [dispatch]);


  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context Hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
