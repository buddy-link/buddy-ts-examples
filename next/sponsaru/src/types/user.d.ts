declare namespace User {
  type GoogleToken = {
    jwt: string;
    exp: number;
    refreshToken: string;
  };

  type EmailIdentity = {
    emailAddress: string;
    userId: string;
    primary: boolean;
  };

  type OrganizationIdentity = {
    email: string;
    organisationName: string;
    organisationSafeName: string;
    owner: boolean;
    role: string;
    userId: string;
  };

  type Item = {
    query_time: string;
    emailIdentities: User.EmailIdentity[];
    organisationIdentities: User.OrganizationIdentity[];
    walletIdentities: string[];
    error?: string;
  };
}
