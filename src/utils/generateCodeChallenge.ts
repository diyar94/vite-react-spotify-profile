import {sha256Verifier} from '@utils/sha256Verifier.ts';
import {base64UrlEncode} from '@utils/base64UrlEncode.ts';


export const generateCodeChallenge = async (codeVerifier: string) => {
    const hashed = await sha256Verifier(codeVerifier);
    return base64UrlEncode(hashed);

}
