/* eslint @typescript-eslint/no-explicit-any: "off" */

import { IResetPassword, ISignIn } from '@/Interfaces/Auth';
import baseAPI from './axiosInstances';

export const SignIn = async (formData: ISignIn) => {
  return await baseAPI.post('/auth/login', formData);
};

export const SignUp = async (formData: ISignIn) => {
  return await baseAPI.post('/auth/seller/register', formData);
};

export const requestPasswordChange = async (formData: { email: string }) => {
  return await baseAPI.post(`/auth/forgot-password`, formData);
};

export const resetPassword = async (formData: IResetPassword, token: any) => {
  return await baseAPI.post(`/auth/reset-password?token=${token}`, formData);
};

// export const verifyLogins = async (formData: IVerifyLogins) => {
//   return await baseAPI.post(
//     '/admins/adminification/verify-signup-or-login-code',
//     formData,
//   );
// };

// export const resendOTP = async (userId: string) => {
//   return await baseAPI.get(`/admins/adminResend-otp-code/${userId}`);
// };

export const uploadFiles = async (formData: any) => {
  return await baseAPI.post(`/files/`, formData);
};
