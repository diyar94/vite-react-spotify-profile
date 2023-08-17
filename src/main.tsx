import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://main--spotify-demo-graph-uegis.apollographos.net/graphql',
    cache: new InMemoryCache()
});
export const accessTokenClient = new ApolloClient({
    uri: 'https://accounts.spotify.com/api/token',
    cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
);
