export const routes = {
  artistsScreen: 'Artists',
  artistScreen: 'Artist',
  artworkScreen: 'Artwork',
  showScreen: 'Show',
  webviewScreen: 'Webview',
  artworkARScreen: 'artworkAR',

  artistBiographyTab: 'Biography',
  artistArtworksTab: 'Works',
  artistShowsTab: 'Shows',

  showPressReleaseTab: 'Press Release',
  showInformationTab: 'About',
  showImagesTab: 'Pictures',
};

export const initialRoutes = {
  root: routes.artistsScreen,
  artistScreenTab: routes.artistArtworksTab,
  showScreenTab: routes.showInformationTab,
};
