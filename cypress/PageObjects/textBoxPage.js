import { BasePage } from './basePage';

export class TextBoxPage extends BasePage {

  static get url() {
    return 'https://demoqa.com/text-box';
  }

  static get fullNameField() {
    return cy.get('#userName');
  }

  static get emailField() {
    return cy.get('#userEmail');
  }

  static get currentAddressField() {
    return cy.get('#currentAddress');
  }

  static get permanentAddressField() {
    return cy.get('#permanentAddress');
  }

  static get submitButton() {
    return cy.get('#submit');
  }

  static get nameOutput() {
    return cy.get('#name');
  }

  static get emailOutput() {
    return cy.get('#email');
  }

  static get currentAddressOutput() {
    return cy.get('#output #currentAddress');
  }

  static get permanentAddressOutput() {
    return cy.get('#output #permanentAddress');
  }

}