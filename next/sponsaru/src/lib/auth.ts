import { AxiosInstance } from 'axios';

const authAPI = process.env.NEXT_PUBLIC_BUDDYLINK_AUTH_API_URL;

type GetUserResponse = {
  query_time: string;
  emailIdentities: {
    emailAddress: string;
    userId: string;
    primary: boolean;
  }[];
  organisationIdentities: {
    email: string;
    organisationName: string;
    organisationSafeName: string;
    owner: boolean;
    role: string;
    userId: string;
  }[];
  walletIdentities: string[];
  error?: string;
};

//https://{{auth-API-Address}}/user
export async function GetUser(axios: AxiosInstance): Promise<GetUserResponse> {
  try {
    const resp = await axios.get(`${authAPI}/user`);
    return resp.data;
  } catch (error) {
    console.error(error);
    return {
      query_time: '',
      emailIdentities: [],
      organisationIdentities: [],
      walletIdentities: [],
      error: 'Error fetching user',
    };
  }
}

// https://{{auth-API-Address}}/user/identities/email
type CreateUserEmailIdentity = {
  email: string;
  primary: boolean;
};

type CreateUserEmailIdentityResponse = {
  emailAddress: string;
  userId: string;
  primary: boolean;
  error?: string;
};

export async function CreateUserEmailIdentity(
  axios: AxiosInstance,
  body: CreateUserEmailIdentity
): Promise<CreateUserEmailIdentityResponse> {
  try {
    const resp = await axios.post(`${authAPI}/user/identities/email`, body);
    return resp.data;
  } catch (error) {
    console.error(error);
    return {
      emailAddress: '',
      userId: '',
      primary: false,
      error: 'Error creating email identity',
    };
  }
}

//https://{{auth-API-Address}}/user/identities/email/remove
type RemoveUserEmailIdentity = {
  email: string;
};

type RemoveUserEmailIdentityResponse = {
  emailAddress: string;
  userId: string;
  success: boolean;
  error?: string;
};

export async function RemoveUserEmailIdentity(
  axios: AxiosInstance,
  body: RemoveUserEmailIdentity
): Promise<RemoveUserEmailIdentityResponse> {
  try {
    const resp = await axios.post(`${authAPI}/user/identities/email/remove`, body);
    return resp.data;
  } catch (error) {
    console.error(error);
    return {
      emailAddress: '',
      userId: '',
      success: false,
      error: 'Error removing email identity',
    };
  }
}

// https://{{auth-API-Address}}/user/identities/wallet
type CreateUserWalletIdentity = {
  walletPublicKey: string;
  primary: boolean;
};

type CreateUserWalletIdentityResponse = {
  walletPublicKey: string;
  userId: string;
  primary: boolean;
  error?: string;
};

export async function CreateUserWalletIdentity(
  axios: AxiosInstance,
  body: CreateUserWalletIdentity
): Promise<CreateUserWalletIdentityResponse> {
  try {
    const resp = await axios.post(`${authAPI}/user/identities/wallet`, body);
    return resp.data;
  } catch (error) {
    console.error(error);
    return {
      walletPublicKey: '',
      userId: '',
      primary: false,
      error: 'Error creating wallet identity',
    };
  }
}

//https://{{auth-API-Address}}/user/identities/wallet/remove
type RemoveUserWalletIdentity = {
  walletPublicKey: string;
};

type RemoveUserWalletIdentityResponse = {
  walletPublicKey: string;
  userId: string;
  success: boolean;
  error?: string;
};

export async function RemoveUserWalletIdentity(
  axios: AxiosInstance,
  body: RemoveUserWalletIdentity
): Promise<RemoveUserWalletIdentityResponse> {
  try {
    const resp = await axios.post(`${authAPI}/user/identities/wallet/remove`, body);
    return resp.data;
  } catch (error) {
    console.error(error);
    return {
      walletPublicKey: '',
      userId: '',
      success: false,
      error: 'Error removing wallet identity',
    };
  }
}
