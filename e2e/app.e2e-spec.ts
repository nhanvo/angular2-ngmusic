import { SpotifySearchAppPage } from './app.po';

describe('spotify-search-app App', function() {
  let page: SpotifySearchAppPage;

  beforeEach(() => {
    page = new SpotifySearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
