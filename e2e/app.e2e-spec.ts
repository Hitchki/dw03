import { Dw03Page } from './app.po';

describe('dw03 App', function() {
  let page: Dw03Page;

  beforeEach(() => {
    page = new Dw03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
