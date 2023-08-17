import {Profile} from '@src/types.ts';


const List = <T extends Partial<Profile>>({profile}: { profile: T }) =>
{
    if (!profile)
    {
        return;
    }
    return <ul>
        <li>User ID: <span id="id"></span>{profile.id}</li>
        <li>User Email: <span id="email"></span>{profile.email}</li>
        <li>User Spotify URl: <a id="uri"
                                 href="#"/>{profile.external_urls?.spotify}</li>

        <li>Link: <a id="url"
                     href={profile.href}></a></li>
        <li>Profile Image: <span id="imgUrl">{profile?.images?.[0].url}</span></li>
    </ul>;
};

export default List;
