import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    authRequest,
  };
};
