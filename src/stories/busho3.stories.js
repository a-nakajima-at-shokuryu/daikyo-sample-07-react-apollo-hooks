import React from 'react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo-hooks'
import Busho3 from '../components/Busho3'

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache
});

export default {
    title: '3-Apollo-ReactHook(1)',
    component: Busho3,
}

// ComponentをApolloProviderでラップする
export const BushoStory = () =>
    <ApolloProvider client={client}>
        <Busho3 />
    </ApolloProvider>
