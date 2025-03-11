import { apiPost } from '@/core/config/axiosConfig';
import { User, UserLogin, UserRegister } from '@/modules/users/interfaces/user.interface';
import { t } from 'i18next';
interface AuthResponse {
  user: User;
  token: string;
}


export const loginService = async (user: UserLogin): Promise<AuthResponse> => {
  try {
    return await apiPost<AuthResponse, UserLogin>('/auth/login', user);
  } catch (error) {
    if (error instanceof Error) {
      const message = error.message;

      if (message.includes('401') || message.includes('404')) {
        throw new Error(t('exception.emailOrPasswordInvalid'));
      } else if (message.includes('400')) {
        throw new Error(t('exception.invalidRequest'));
      }

      throw new Error(message);
    }
    throw new Error(t('exception.unknownError'));
  }
};

export const registerService = async (user: UserRegister): Promise<AuthResponse> => {
  try {
    return await apiPost<AuthResponse, UserRegister>('/auth/register', user);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(t('exception.unknownError'));
  }
};