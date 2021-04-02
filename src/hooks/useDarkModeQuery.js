import {gql, useQuery} from '@apollo/client';

const IS_DARK_THEME = gql`
  query {
    isDarkTheme @client
  }
`;

export default function useIsDarkMode() {
  const {data} = useQuery(IS_DARK_THEME);

  return data && data.isDarkTheme;
}
