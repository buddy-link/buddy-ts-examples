import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useQuests = () =>
  useQuery({
    queryKey: ['quests'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://e9xc9ftx7l.execute-api.us-east-1.amazonaws.com/dev/quests',
        headers: {
          user_id: 'AIDAYEOGDEAXQDTAWY4DO',
          Accept: 'application/json',
          'x-api-key': 'DfamlZxOYS9nY89FHtf7Y5ufMLoJkFDs74YaOss1',
        },
      };

      return axios
        .request(config)
        .then((response) => {
          console.log('useQuests: ', response.data);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
