import { post } from "./network";
import { Role, UserType } from "./types";


interface SignInInputType {
  role: string;
  email: string;
  password: string;
}

interface SignUpInputType {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
}

const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

export const signIn = async (userInfo: SignInInputType) => {
  try {
    const response = await post(`${BACKEND_URL}/api/v1/auth/signin`, userInfo);
    localStorage.setItem("token", `Bearer ${response.token}`);
    const data = response.user;
    return [data, null] as [UserType, null];
  } catch (err: any) {
    return [null, err] as [null, Error];
  }
};

export const signUp = async (userInfo: SignUpInputType) => {
  console.log(`SignUp auth: backendurl ${BACKEND_URL}`)
  try {
    const response = await post(`${BACKEND_URL}/api/v1/auth/signup`, userInfo);
    localStorage.setItem("token", `Bearer ${response.token}`);
    const data = response.user;
    return [data, null] as [UserType, null];
  } catch (err: any) {
    return [null, err] as [null, Error];
  }
};

export const gLoginReq = async ({accessToken, role}: { accessToken: string, role: Role}) => {
  try {
    const response = await post(`${BACKEND_URL}/api/v1/auth/gLogin`, {
      accessToken,
      role
    });
    localStorage.setItem("token", `Bearer ${response.token}`);
    const data = response.user;
    return [data, null] as [UserType, null];
  } catch (err: any) {
    return [null, err] as [null, Error];
  }
};