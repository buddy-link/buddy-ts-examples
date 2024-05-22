import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useTeams = () =>
  useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://7h6ggyk6yf.execute-api.us-east-1.amazonaws.com/dev//groups',
        headers: {
          user_id: 'AIDAYEOGDEAXQDTAWY4DO',
          Accept: 'application/json',
          'x-api-key': 'z3RLMDSix54as3nOtaP1cawy9fhykGsc581JPLSs',
        },
      };

      return axios
        .request(config)
        .then((response) => {
          console.log('useTeams: ', response.data);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
