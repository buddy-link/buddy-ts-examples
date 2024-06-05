/* eslint-disable @typescript-eslint/no-var-requires */

const axios = require('axios');
const { aws4Interceptor } = require('aws4-axios');

const baseURL = process.env.NEXT_PUBLIC_BUDDYLINK_QUESTS_API_URL;

const quests = [
  {
    name: 'aaa',
    displayName: '12345',
    image: 'https://buddy.link/logo.svg',
    owner: 'us-east-1:8238c320-2f78-ca67-bc74-017d3d2e85fc',
    status: 'unknown',
    config: {
      PointValue: 123,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'aaa2',
    displayName: '65432',
    image: 'https://buddy.link/logo.svg',
    owner: 'us-east-1:8238c320-2f78-ca67-bc74-017d3d2e85fc',
    status: 'unknown',
    config: {
      PointValue: 0,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'quest1',
    displayName: 'Test Quest 1',
    image: 'https://buddy.link/logo.svg',
    owner: 'us-east',
    status: 'unknown',
    config: {
      PointValue: 1,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 1,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'quest13',
    displayName: 'Test Quest 1',
    image: 'https://buddy.link/logo.svg',
    owner: 'us-east-1:8238c320-2f78-ca67-bc74-017d3d2e85fc',
    status: 'unknown',
    config: {
      PointValue: 1,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 1,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'a1',
    displayName: 'Test Quest 1',
    image: 'https://buddy.link/logo.svg',
    owner: 'us-east-1:8238c320-2f78-ca67-bc74-017d3d2e85fc',
    status: 'unknown',
    config: {
      PointValue: 1,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 1,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'Rafas-quest',
    displayName: 'Rafas Quest 1',
    image: 'https://buddy.link/logo.svg',
    owner: 'us-east-1:8238c320-2f78-ca67-bc74-017d3d2e85fc',
    status: 'unknown',
    config: {
      PointValue: 0,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'quest1',
    displayName: 'Test Quest 1',
    image: 'https://buddy.link/logo.svg',
    owner: 'AIDAYEOGDEAXQDTAWY4DO',
    status: 'unknown',
    config: {
      PointValue: 1,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 1,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'Rafas-quest3',
    displayName: 'Rafas Quest 14',
    image: 'https://buddy.link/logo.svg',
    owner: 'us-east-1:8238c320-2f78-ca67-bc74-017d3d2e85fc',
    status: 'unknown',
    config: {
      PointValue: 11,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'aa3a',
    displayName: '12345',
    image:
      'https://dev-buddy-quest-quest-image-bucket.s3.amazonaws.com/aa3a_eu123/profile_images/ef5ffdba-d0f3-4e49-b98b-c0bc05bc1ba7.png',
    owner: 'eu123',
    status: 'active',
    config: {
      PointValue: 123,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'quest2',
    displayName: 'Test Quest 2',
    image: 'https://img.icons8.com/?size=256&id=92&format=png',
    owner: 'AIDAYEOGDEAXQDTAWY4DO',
    status: 'active',
    config: {
      PointValue: 1,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 1,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'Rafas-quest2',
    displayName: 'Rafas Quest 13',
    image: 'https://buddy.link/logo.svg',
    owner: 'us-east-1:8238c320-2f78-ca67-bc74-017d3d2e85fc',
    status: 'unknown',
    config: {
      PointValue: 100,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 1,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'quest1',
    displayName: 'Test Quest 1',
    image: 'https://img.icons8.com/?size=256&id=92&format=png',
    owner: 'us-east-1:8238c320-2f78-ca67-bc74-017d3d2e85fc',
    status: 'unknown',
    config: {
      PointValue: 1,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 1,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
  {
    name: 'test-quest-1',
    displayName: 'Test Quest 1',
    image: 'https://img.icons8.com/?size=256&id=92&format=png',
    owner: 'AIDAYEOGDEAXQDTAWY4DO',
    status: 'active',
    config: {
      PointValue: 1,
      RepeatFrequency: 'daily',
      UseLastSuccessAsEpoch: false,
      Timezone: '7:00',
      MaximumTimeToComplete: 1,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        content: 'test content',
        operator: 'include_content',
        profile: '...',
      },
    },
  },
];

//  AWS cred
const credentials = {
  accessKeyId: process.env.AWS_ACCESSKEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
};

const interceptor = aws4Interceptor({
  region: 'us-east-1',
  service: 'execute-api',
  credentials,
});

axios.interceptors.request.use(interceptor);

const updateQuestStatus = async (quest) => {
  const questId = `${quest.name}_${quest.owner}`;
  const url = `${baseURL}/quests/${questId}`;
  const payload = {
    status: 'inactive',
    ...quest,
  };

  try {
    const response = await axios.post(url, payload);
    if (response.status === 200) {
      console.log(`Quest ${questId} atualizada com sucesso!`);
    } else {
      console.log(`Falha ao atualizar a quest ${questId}. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Erro ao atualizar a quest ${questId}:`, error.response ? error.response.data : error.message);
  }
};

const updateAllQuests = async () => {
  for (const quest of quests) {
    await updateQuestStatus(quest);
  }
};

updateAllQuests();
