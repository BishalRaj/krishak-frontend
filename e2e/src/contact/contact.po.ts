import { browser, by, element } from 'protractor';

export class Contact {

  getBaseUrl(){
    return 'http://localhost:4200/';
  }

  navigateTo() {
    return browser.get('/contact');
  }

  getRegisterHereElement() {
    return element(by.className('register-here'));
  }

  getCurrentUrl() {
    return (browser.getCurrentUrl());
  }

  getRegisterUrl(){
    return this.getBaseUrl() + 'register';
  }
}
