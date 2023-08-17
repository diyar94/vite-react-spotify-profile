import {useEffect, useState} from 'react';

const getAccessToken = async (clientId: string, code: string): Promise<string> =>
{
    const verifier = localStorage.getItem('verifier');
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:5173/callback');
    params.append('code_verifier', verifier!);

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: params
    });

    const {access_token} = await result.json();
    return access_token;
};
export const useGetAccessToken = (clientId: string, code: string | null) =>
{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() =>
    {
        setLoading(true);
        const fetchToken = async () =>
        {
            try
            {
                const token = await getAccessToken(clientId, code as string);
                setAccessToken(token)
            }
            catch (err)
            {

                setError(err);
            }
            finally
            {
                setLoading(false);
            }
        };

        fetchToken();

    }, [clientId, code]);

    return {
        loading,
        error,
        accessToken
    };
};
