export interface SignInParam {
    username: string;
    password: string;
    autoLogin: boolean;
}

export interface LoginResponse {
    message: string;
    flag: boolean;
    autoLogin: boolean;
    userRes: {
        name: string;
        username: string
    };
}

export interface AutoLoginResponse {
   name:string;
   username:string;
   autoLoginFlag:boolean;
}