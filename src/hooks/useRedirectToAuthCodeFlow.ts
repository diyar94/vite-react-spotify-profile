import {useCallback} from 'react';
import {generateCodeVerifier} from '@utils/generateCodeVerifier.ts';
import {generateCodeChallenge} from '@utils/generateCodeChallenge.ts';

const useRedirectToAuthCodeFlow = (clientId: string) =>
{
    return useCallback(async () =>
        {
            const verifier = generateCodeVerifier(128);
            const challenge = await generateCodeChallenge(verifier);

            localStorage.setItem('verifier', verifier);


            const params = new URLSearchParams();
            params.append('client_id', clientId);
            params.append('response_type', 'code');
            params.append('redirect_uri', 'http://localhost:5173/callback');
            params.append('scope', 'user-read-private user-read-email');
            params.append('code_challenge_method', 'S256');
            params.append('code_challenge', challenge);

             document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
        },
        [clientId]);
};

export default useRedirectToAuthCodeFlow;
