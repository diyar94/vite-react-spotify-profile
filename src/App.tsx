import './App.css';
import Header from '@components/Header';

import {useGetAccessToken} from '@hooks/useGetAccessToken.ts';

import useRedirectToAuthCodeFlow from '@hooks/useRedirectToAuthCodeFlow.ts';
import {useEffect, useState} from 'react';
import {useFetchProfile} from '@hooks/useFetchProfile.ts';
import {Profile} from '@src/types.ts';
import List from '@components/List';
import {codeValues} from '@utils/constants.ts';


function App()
{
    const clientId = process.env.CLIENT_ID || '';
    const params = new URLSearchParams(window.location.search);
    const code = params.get(codeValues.code);


    const redirect = useRedirectToAuthCodeFlow(clientId);
    const {accessToken} = useGetAccessToken(clientId, code);
    const {error, loading, profile} = useFetchProfile(accessToken);
    const [userProfile, setUserProfile] = useState<Profile | unknown>(profile);

    useEffect(() =>
    {
        if (!code)
        {
            redirect();
        }
        else
        {
            setUserProfile(profile);
        }


    }, [accessToken, code, error, loading, profile, redirect]);


    return !userProfile ? <div>
            <Header/>
        </div> :
        <List profile={userProfile}/>;
}

export default App;
