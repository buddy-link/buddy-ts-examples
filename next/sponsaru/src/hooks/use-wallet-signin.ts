import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useCallback } from 'react';
import { sign } from 'tweetnacl';
import * as bs58 from 'bs58';
import { toast } from 'sonner';

export const useWalletSignIn = () => {
  const { publicKey, signMessage, wallet } = useWallet();

  const walletSignIn = useCallback(async () => {
    try {
      // `publicKey` will be null if the wallet isn't connected
      if (!publicKey) throw new Error('Wallet not connected!');
      // `signMessage` will be undefined if the wallet doesn't support it
      if (!signMessage) throw new Error('Wallet does not support message signing!');

      const response = await axios.get('/api/auth/createNonce');

      const nonce = response.data.nonce;

      // Encode anything as bytes
      const message = new TextEncoder().encode(`Sign this message: ${nonce}`);
      // Sign the bytes using the wallet
      const signature = await signMessage(message);

      // Verify that the bytes were signed using the private key that matches the known public key
      if (!sign.detached.verify(message, signature, publicKey.toBytes())) throw new Error('Invalid signature!');

      console.log('aqui');

      await signIn('credentials', {
        redirect: false,
        publicKey: publicKey,
        signature: bs58.encode(signature),
      });
    } catch (error) {
      toast(`Signing failed:`, {
        //@ts-expect-error TODO: fix this type error
        description: error?.message,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    }
  }, [publicKey, signMessage]);

  return { walletSignIn };
};
