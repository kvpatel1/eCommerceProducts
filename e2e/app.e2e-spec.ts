import { ECommerceInterviewTestPage } from './app.po';

describe('ecommerce-interview-test App', function() {
  let page: ECommerceInterviewTestPage;

  beforeEach(() => {
    page = new ECommerceInterviewTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
