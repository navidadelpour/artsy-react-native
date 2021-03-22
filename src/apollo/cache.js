import {InMemoryCache, makeVar} from '@apollo/client';

export const isDarkTheme = makeVar(undefined);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isDarkTheme() {
          return isDarkTheme();
        },
      },
    },
  },
});

export default cache;
