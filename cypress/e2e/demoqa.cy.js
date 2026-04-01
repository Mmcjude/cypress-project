import { TextBoxPage } from '../PageObjects/textBoxPage';
import { CheckboxPage } from '../PageObjects/checkBoxPage';

describe('DEMO QA', () => {

  context('Text Box tests', () => {

    beforeEach(() => {
      TextBoxPage.visit();
    });

    it('Set input values and validate', () => {

      TextBoxPage.fullNameField.type('Joe');
      TextBoxPage.emailField.type('random@email.com');
      TextBoxPage.currentAddressField.type('Address A');
      TextBoxPage.permanentAddressField.type('Address B');

      TextBoxPage.submitButton.click();

      TextBoxPage.nameOutput.should('have.text', 'Name:Joe');
      TextBoxPage.emailOutput.should('have.text', 'Email:random@email.com');
      TextBoxPage.currentAddressOutput.should('contain.text', 'Current Address :Address A');
      TextBoxPage.permanentAddressOutput.should('contain.text', 'Permanent Address :Address B');

    });

    it('Incorrect email format', () => {

      TextBoxPage.emailField.should('not.have.class', 'field-error');

      TextBoxPage.emailField.type('xxx@yyy@zzz.com');
      TextBoxPage.submitButton.click();

      TextBoxPage.emailField.should('have.class', 'field-error');

    });

  });

  context('Check Box tests', () => {

    beforeEach(() => {
      CheckboxPage.visit();
    });

    it.only('Check the Notes, Angular, Private, Excel File.doc checkboxes', () => {

      CheckboxPage.expandCheckbox('Home');
      CheckboxPage.expandCheckbox('Desktop');
      CheckboxPage.expandCheckbox('Documents');
      CheckboxPage.expandCheckbox('WorkSpace');
      CheckboxPage.expandCheckbox('Office');
      CheckboxPage.expandCheckbox('Downloads');

      CheckboxPage.checkCheckbox('Notes');
      CheckboxPage.checkCheckbox('Angular');
      CheckboxPage.checkCheckbox('Private');
      CheckboxPage.checkCheckbox('Excel File.doc');

      CheckboxPage.resultsOutput.should(
    'contain.text',
    'You have selected :notesangularprivateexcelFile'
);

      CheckboxPage.textSuccess.should('contain.text', 'notes');
      CheckboxPage.textSuccess.should('contain.text', 'angular');
      CheckboxPage.textSuccess.should('contain.text', 'private');
      CheckboxPage.textSuccess.should('contain.text', 'excelFile');

    });

  });

});