import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Busho2 from '../components/Busho2'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
})

export default {
    title: '2-ApolloClient+MaterialUI',
    component: Busho2,
}

// ComponentをApolloProviderでラップする
export const BushoStory = () =>
    <ApolloProvider client={client}>
        <Busho2 />
    </ApolloProvider>
