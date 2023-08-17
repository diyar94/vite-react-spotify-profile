import {useEffect, useState} from 'react';
import {Profile} from '@src/types.ts';


async function fetchProfile<T>(token: string | null): Promise<T | null> {
    if(!token) return null;
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}



export const useFetchProfile = (token: string | null) =>
{
    const [profile, setProfile] = useState<Profile | unknown>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | unknown>(null);

    useEffect(() =>
    {

        const requestProfile = async () =>
        {
      try
      {
          const result = await fetchProfile(token);
          setProfile(result)
      } catch (e)
      {
          setError(e)
      }finally
      {
          setLoading(false)
      }

        };

        requestProfile();
    }, [token]);

    return {
        error,
        loading,
        profile
    }
};
