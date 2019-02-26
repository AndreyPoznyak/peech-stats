import 'normalize.css/normalize.css';
import './styles/index.scss';

import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const codes = require('../data/zipcodes').zip;

const setupComponents = () => {
    const zipcode = new MDCTextField(document.querySelector('.zipcode'));
    new MDCRipple(document.querySelector('.validate'));
};


document.addEventListener("DOMContentLoaded", () => {
	setupComponents();
});
