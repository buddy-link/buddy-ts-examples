import crypto from 'crypto';
import { serialize } from 'cookie';
import type { NextApiResponse } from 'next';
import { cookies } from 'next/headers';

const handler = async (res: NextApiResponse) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  const cookieStore = cookies();
  cookieStore.set('authNonce', nonce);
  return Response.json({ nonce });
};

export { handler as GET };
