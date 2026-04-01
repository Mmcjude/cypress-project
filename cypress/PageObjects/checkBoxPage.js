import { BasePage } from './basePage';

export class CheckboxPage extends BasePage {
  static get url() {
    return 'https://demoqa.com/checkbox';
  }

  static expandCheckbox(checkboxName) {
    cy.get('.rc-tree-title')
      .contains(checkboxName)
      .parent()
      .parent()
      .find('.rc-tree-switcher')
      .click();
  }

  static checkCheckbox(checkboxName) {
    cy.get('.rc-tree-title')
      .contains(checkboxName)
      .parent()
      .parent()
      .find('.rc-tree-checkbox')
      .click();
  }

  static get resultsOutput() {
    return cy.get('#result');
  }

  static get textSuccess() {
    return cy.get('.text-success');
  }
}