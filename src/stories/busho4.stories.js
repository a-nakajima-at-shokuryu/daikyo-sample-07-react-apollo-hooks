import React from 'react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo-hooks'
import Busho4 from '../components/Busho4'

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache
});

export default {
    title: '4-Apollo-ReactHook(2)',
    component: Busho4,
}

// ComponentをApolloProviderでラップする
export const BushoStory = () =>
    <ApolloProvider client={client}>
        <Busho4 />
    </ApolloProvider>
