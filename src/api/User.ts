import apiClient from './ApiClient';
import {UserInfo, UserToken} from '@/types/entity';

export interface SignInReq {
  username: string;
  password: string;
}

export type SignInRes = UserToken & { user: UserInfo };

enum Api {
  SignIn = '/auth/signin',
  SignUp = '/auth/signup',
  LouOut = '/auth/logout',
  Refresh = '/auth/refresh',
  User = '/user/',
}

const signIn = (data: SignInReq) => apiClient.post<SignInRes>({url: Api.SignIn, data});

const findById = (id: string) => apiClient.get({url: `${Api.User}${id}`});

export default {
  signIn,
  findById,
};
