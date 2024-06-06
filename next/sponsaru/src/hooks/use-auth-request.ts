import { useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import aws4Interceptor from 'aws4-axios';
import { UserContext } from '@/providers/user-provider';

const authReq = axios.create();

const useAuthReq = () => {
  const userContext = useContext(UserContext);
  const isInterceptorAdded = useRef(false);

  useEffect(() => {
    if (!userContext.credentials || isInterceptorAdded.current) {
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

    isInterceptorAdded.current = true;
  }, [userContext.credentials]);

  return authReq;
};

export default useAuthReq;
