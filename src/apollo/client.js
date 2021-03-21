import {ApolloClient} from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  uri: 'https://metaphysics-production.artsy.net',
  cache,
});

export default client;
