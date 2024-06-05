import { useContext, useEffect } from 'react';

import axios from 'axios';
import aws4Interceptor from 'aws4-axios';
import { UserContext } from '@/providers/user-provider';

const authReq = axios.create();

const useAuthReq = () => {
  const userContext = useContext(UserContext);

  console.log('userContext', userContext);

  useEffect(() => {
    if (!userContext.credentials) {
      return;
    }

    authReq.interceptors.request.use(async (config) => {
      if (userContext.credentials === null) {
        return config;
      }

      aws4Interceptor({
        options: {
          service: 'execute-api',
          region: process.env.NEXT_PUBLIC_AWS_REGION!,
        },
        credentials: {
          accessKeyId: userContext.credentials.AccessKeyId!,
          secretAccessKey: userContext.credentials.SecretKey!,
          sessionToken: userContext.credentials.SessionToken!,
        },
      })(config);

      return config;
    });
  }, [userContext.credentials]);

  return authReq;
};

export default useAuthReq;
