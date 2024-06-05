/* eslint-disable @typescript-eslint/no-var-requires */

const axios = require('axios');
const { aws4Interceptor } = require('aws4-axios');

const baseURL = process.env.NEXT_PUBLIC_BUDDYLINK_QUESTS_API_URL;
const xApiKey = process.env.NEXT_PUBLIC_QUESTS_API_KEY;

// quests list
const quests = [
  {
    name: 'followbuddylinkapp',
    displayName: 'Follow BuddyLinkApp',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 1000,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'follow',
        post: 'https://x.com/BuddyLinkApp',
      },
    },
  },
  {
    name: 'followladdercaster',
    displayName: 'Follow LadderCaster',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 1000,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'follow',
        post: 'https://x.com/LadderCaster',
      },
    },
  },
  {
    name: 'followaeyakovenko',
    displayName: 'Follow Anatoly Yakovenko',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 500,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'follow',
        post: 'https://x.com/aeyakovenko',
      },
    },
  },
  {
    name: 'followthemoonboots',
    displayName: 'Follow The Moon Boots',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 200,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'follow',
        post: 'https://x.com/themoonboots',
      },
    },
  },
  {
    name: 'followcalvinmaighan',
    displayName: 'Follow Calvin Maighan',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 200,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'follow',
        post: 'https://x.com/calvinmaighan',
      },
    },
  },
  {
    name: 'likesolanadevs',
    displayName: 'Like Solana Devs Post',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 100,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'like',
        post: 'https://x.com/solana_devs/status/1794024427455209727',
      },
    },
  },
  {
    name: 'retweetsolanadevs',
    displayName: 'RT Solana Devs Post',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 100,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'retweet',
        post: 'https://x.com/solana_devs/status/1794024427455209727',
      },
    },
  },
  {
    name: 'likebuddylinkapppost',
    displayName: 'Like BuddyLinkApp Post',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 100,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'like',
        post: 'https://x.com/BuddyLinkApp/status/1790802041608315373',
      },
    },
  },
  {
    name: 'retweetbuddylinkapppost',
    displayName: 'RT BuddyLinkApp Post',
    image: 'https://buddy.link/logo.svg',
    owner: 'buddy',
    status: 'active',
    config: {
      PointValue: 100,
      RepeatFrequency: 'none',
      UseLastSuccessAsEpoch: false,
      Timezone: '01:00',
      MaximumTimeToComplete: 0,
      RepeatLimit: 0,
    },
    trigger: {
      type: 'social',
      provider: 'twitter',
      args: {
        credit_on_click_through: 'true',
        action_required: 'retweet',
        post: 'https://x.com/BuddyLinkApp/status/1790802041608315373',
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

//  interceptor AWS4
const interceptor = aws4Interceptor({
  region: 'us-east-1',
  service: 'execute-api',
  credentials,
});

axios.interceptors.request.use(interceptor);

const createQuest = async (quest) => {
  const url = `${baseURL}/quests`;
  const payload = {
    ...quest,
  };

  try {
    const response = await axios.post(url, payload, { headers: { 'x-api-key': xApiKey } });
    if (response.status === 200) {
      console.log(`Quest ${quest.name} criada com sucesso!`);
    } else {
      console.log(`Falha ao criar a quest ${quest.name}. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Erro ao criar a quest ${quest.name}:`, error.response ? error.response.data : error.message);
  }
};

const createAllQuests = async () => {
  for (const quest of quests) {
    await createQuest(quest);
  }
};

createAllQuests();
