//cd storefront
//npm install @apollo/client graphql graphql-tag
//npm install -D graphql-codegen @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations
// npm run gql:gen

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
  }),
  cache: new InMemoryCache(),
})
