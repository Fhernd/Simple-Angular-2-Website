import { SimpleAngular2WebSitePage } from './app.po';

describe('simple-angular2-web-site App', function() {
  let page: SimpleAngular2WebSitePage;

  beforeEach(() => {
    page = new SimpleAngular2WebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('iz works!');
  });
});
