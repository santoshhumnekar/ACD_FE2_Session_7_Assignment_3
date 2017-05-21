import { RolesPage } from './app.po';

describe('roles App', function() {
  let page: RolesPage;

  beforeEach(() => {
    page = new RolesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
