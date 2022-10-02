import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, extensions: ${extensions.response}`
            );
        });
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});
const httpLink = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' });
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
});
