export interface ISignIn {
  email: string;
  password: string;
}
export interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  username?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
}

export interface IResetPassword {
  password: string;
}
export interface IVerifyLogins {
  userId: string;
  uniqueVerificationCode: string;
}
export interface IUpdatePassword {
  oldPassword: string;
  newPassword: string;
}
