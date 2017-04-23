import { ProductPortalPage } from './app.po';

describe('product-portal App', () => {
  let page: ProductPortalPage;

  beforeEach(() => {
    page = new ProductPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
