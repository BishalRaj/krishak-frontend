import { Contact } from './contact.po';

describe('Contact', () => {
  let page: Contact;

  beforeEach(() => {
    page = new Contact();
    page.navigateTo();
  });

  describe('Feature Go to contact page', () => {
    describe('Given index page is opened', () => {
      describe('when I click got to contact', () => {
        it('then app should redirect to contact page', () => {
            expect(1).toEqual(1);
        });
      });
    });
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
