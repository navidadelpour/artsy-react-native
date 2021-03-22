import {InMemoryCache, makeVar} from '@apollo/client';

export const isDarkTheme = makeVar(false);

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
