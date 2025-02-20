import apiClient from "../apiClient";
import { useMutation } from "@tanstack/react-query";
import {SignInParam, AutoLoginResponse, LoginResponse} from "./login-type";

export function loginApi() {
    return useMutation<LoginResponse, Error, SignInParam>({
        mutationKey: ["signIn"],
        mutationFn: async (param: SignInParam) => {
            const response = await apiClient.post("/login/login", param);
            return response.data.data;
        }
    })
}

export function autoLoginApi() {
    return useMutation<AutoLoginResponse, Error>({
        mutationKey: ["autoSignIn"],
        mutationFn: async () => {
            const response = await apiClient.get("/login/auto-login");
            return response.data.data;
        }
    })
}

export function logoutApi() {
    return useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            await apiClient.get("/login/logout");
        }
    })
}