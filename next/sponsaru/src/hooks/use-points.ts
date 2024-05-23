import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const usePoints = () =>
  useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://3crw129z4f.execute-api.us-east-1.amazonaws.com/dev/',
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

// Group
// https://7h6ggyk6yf.execute-api.us-east-1.amazonaws.com/dev/
// z3RLMDSix54as3nOtaP1cawy9fhykGsc581JPLSs

// Point
// https://3crw129z4f.execute-api.us-east-1.amazonaws.com/dev/
// RlaCE1zR1uaemLdMguydX5yS8pqcNex674tT3CJb

// Quest Attempt
// https://0rcgwqmea8.execute-api.us-east-1.amazonaws.com/dev/
// fJ6VTc0kPR6Go2JAbELJR5iBcpuKC1H45OtPVsAC

// Quest Management API
// https://e9xc9ftx7l.execute-api.us-east-1.amazonaws.com/dev/
// DfamlZxOYS9nY89FHtf7Y5ufMLoJkFDs74YaOss1
