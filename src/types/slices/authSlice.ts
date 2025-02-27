export interface User {
    name: string;
    surname: string;
    email: string;
    status: string;
    password: string;
  }
  
  export interface AuthState {
    token: string | null;
    signinSuccess: any,
    signinLoading: boolean;
    signinError: string | null;
    registerSuccess: any,
    registerLoading: boolean;
    registerError: string | null;
    forgotPasswordSuccess: any,
    forgotPasswordLoading: boolean;
    forgotPasswordError: string | null;
    resetPasswordSuccess: any,
    resetPasswordLoading: boolean
    resetPasswordError: string | null;
    isAuthenticated: boolean;
  }
  
  export interface SigninResponse {
    user: User;
    token: string;
    expiresIn: number;
  }
  