'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider as NextSessionProvider } from 'next-auth/react';

const SessionProvider = ({ children }: PropsWithChildren) => {
  return <NextSessionProvider>{children}</NextSessionProvider>;
};

export default SessionProvider;
