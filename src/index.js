import 'normalize.css/normalize.css';
import './styles/index.scss';

import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCDialog} from '@material/dialog';

const codes = require('../data/zipcodes').zip;

const elements = {
    codeInput: null,
    validateButton: null,
    successDialog: null,
    failureDialog: null
};

const setupComponents = () => {
    elements.codeInput = document.querySelector('#zipcode-input');
    elements.validateButton = document.querySelector('.validate');

    elements.successDialog = new MDCDialog(document.querySelector('.success-dialog'));
    elements.failureDialog = new MDCDialog(document.querySelector('.failure-dialog'));

    new MDCTextField(document.querySelector('.zipcode'));
    new MDCRipple(elements.validateButton);
};

const validate = value => {
    return codes.indexOf(parseInt(value, 10)) > -1;
};

const onValidateButtonClicked = () => {
    const enteredZip = elements.codeInput.value;

    if (validate(enteredZip)) {
        console.log('Eligible zip');
        elements.successDialog.open()
    } else {
        console.log('Not eligible zip')
        elements.failureDialog.open()
    }
};

document.addEventListener("DOMContentLoaded", () => {
	setupComponents();

    elements.validateButton.addEventListener('click', onValidateButtonClicked)
});
