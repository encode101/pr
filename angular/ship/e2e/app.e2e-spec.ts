import { ShipPage } from './app.po';

describe('ship App', function() {
  let page: ShipPage;

  beforeEach(() => {
    page = new ShipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
