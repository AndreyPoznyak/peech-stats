import 'normalize.css/normalize.css';
import './styles/index.scss';

import {MDCRipple} from '@material/ripple';

let elements = {};

const setupComponents = () => {
    elements = {
        getDataButton: document.querySelector('.get-data'),
        usersAmountLabel: document.querySelector('.users-amount'),
        users21DaysLabel: document.querySelector('.users-retention-amount'),
        usersActiveLabel: document.querySelector('.users-active-amount'),
        usersTenVoicedLabel: document.querySelector('.users-ten-voiced-amount'),
        usersTenArticlesLabel: document.querySelector('.users-ten-articles-amount'),
        usersVoicedLabel: document.querySelector('.users-voiced-amount'),
        usersAddedArticlesLabel: document.querySelector('.users-articles-amount'),
        usersPositiveLabel: document.querySelector('.users-positive-amount'),
        usersNegativeLabel: document.querySelector('.users-negative-amount'),
	};

    new MDCRipple(elements.getDataButton);
};

const filterNotRealUsers = users => users.filter(user => ![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 34, 37, 40, 43, 65]
	.includes(user.userId));

const fetchData = () => {
	return fetch('https://us-central1-voiceservice-217021.cloudfunctions.net/stats').then(response => response.json());
};

const populateValues = allUsers => {
	const users = filterNotRealUsers(allUsers);
	const today = new Date();
	const monthAgo = new Date().setDate(today.getDate() - 30);
	const days21Ago = new Date().setDate(today.getDate() - 21);
	const msPerDay = 1000 * 60 * 60 * 24;

	const activeUsers = users.filter(user => new Date(user.lastArticleAddDate).getTime() > monthAgo);
	const days21AgoUsers = users.filter(user => new Date(user.registrationDate).getTime() <= days21Ago);
	const voicedUsers = users.filter(user => user.voicedArticlesCount > 0);
	const voicedTenUsers = users.filter(user => user.voicedArticlesCount > 9);
	const articlesTenUsers = users.filter(user => user.articlesCount > 9);
	const artcilesAddedUsers = users.filter(user => user.articlesCount > 0);
	const retention21Users = days21AgoUsers.filter(user => ( new Date(user.lastArticleAddDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 21);

	//const positiveUsers = users.filter(user => user.articlesCount > 0);
	//const negativeUsers = users.filter(user => user.articlesCount > 0);

	elements.usersAmountLabel.innerHTML = users.length;
	elements.usersActiveLabel.innerHTML = activeUsers.length;
	elements.users21DaysLabel.innerHTML = `${retention21Users.length} / ${days21AgoUsers.length} = ${Math.round(100 * (retention21Users.length / days21AgoUsers.length))}%`;
	elements.usersTenVoicedLabel.innerHTML = voicedTenUsers.length;
	elements.usersVoicedLabel.innerHTML = voicedUsers.length;
	elements.usersAddedArticlesLabel.innerHTML = artcilesAddedUsers.length;
	elements.usersTenArticlesLabel.innerHTML = articlesTenUsers.length;
	elements.usersPositiveLabel.innerHTML = 'Not available yet';
	elements.usersNegativeLabel.innerHTML = 'Not available yet';

};

const showError = () => console.log('Sorry, request failed');

const onGetDataClicked = () => {
	fetchData()
		.then(populateValues)
		.catch(showError);
};

document.addEventListener("DOMContentLoaded", () => {
	setupComponents();

    elements.getDataButton.addEventListener('click', onGetDataClicked);
});
