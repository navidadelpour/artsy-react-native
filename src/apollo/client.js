import {ApolloClient} from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  uri: 'https://metaphysics-staging.artsy.net',
  cache,
});

export default client;
