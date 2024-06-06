import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import useAuthReq from './use-auth-request';

const authAPI = process.env.NEXT_PUBLIC_BUDDYLINK_AUTH_API_URL;

const useUser = (enabled: boolean) => {
  const authReq = useAuthReq();

  const user = useQuery({
    queryKey: ['user'],
    queryFn: () => authReq.get(`${authAPI}/user`).then((res: AxiosResponse) => res.data),
    enabled: enabled,
    staleTime: 1000 * 60 * 2,
  });

  return { user };
};

export default useUser;
