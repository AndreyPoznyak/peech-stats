import 'normalize.css/normalize.css';
import './styles/index.scss';

import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCDialog} from '@material/dialog';

const codes = require('../data/zipcodes').zip;

import * as firebase from './firebase/firebase.js';

const elements = {
    codeInput: null,
    validateButton: null,
    successDialog: null,
    failureDialog: null
};

const user = {
    validZip: false,
    firstName: '',
    lastName: '',
    address: '',
    email: ''
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

const showFirstStep = () => {};

const showSecondStep = () => {
    document.querySelector('.zip-form').classList.add('hidden');
    document.querySelector('.customer-info').classList.remove('hidden');
};

const onValidateButtonClicked = () => {
    const enteredZip = elements.codeInput.value;

    if (validate(enteredZip)) {
        console.log('Eligible zip');
        user.validZip = true;
        elements.successDialog.open();
        elements.successDialog.listen('MDCDialog:closing', data => {
            showSecondStep();
        });
    } else {
        console.log('Not eligible zip');
        user.validZip = false;
        elements.failureDialog.open();
        elements.failureDialog.listen('MDCDialog:closing', data => {
            showSecondStep();
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
	setupComponents();

	firebase.launch();

	firebase.saveEligibleDealerInfo({
		email: 'test'
	});

    elements.validateButton.addEventListener('click', onValidateButtonClicked)
});
