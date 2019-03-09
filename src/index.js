import 'normalize.css/normalize.css';
import './styles/index.scss';

import {MDCRipple} from '@material/ripple';

let elements = {};

const setupComponents = () => {
    elements = {
        getDataButton: document.querySelector('.get-stats-data'),
        getUsersDataButton: document.querySelector('.get-users-data'),
        usersAmountLabel: document.querySelector('.users-amount'),
        users21DaysLabel: document.querySelector('.users-retention-amount'),
        usersActiveLabel: document.querySelector('.users-active-amount'),
        usersTenVoicedLabel: document.querySelector('.users-ten-voiced-amount'),
        usersTenArticlesLabel: document.querySelector('.users-ten-articles-amount'),
        usersVoicedLabel: document.querySelector('.users-voiced-amount'),
        usersAddedArticlesLabel: document.querySelector('.users-articles-amount'),
        usersPositiveLabel: document.querySelector('.users-positive-amount'),
        usersNegativeLabel: document.querySelector('.users-negative-amount'),
        usersVotedLabel: document.querySelector('.users-voted-amount'),
	};

    new MDCRipple(elements.getDataButton);
    new MDCRipple(elements.getUsersDataButton);
};

const notUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 34, 37, 40, 43, 65];

const filterNotRealUsers = users => users.filter(user => !notUsers.includes(user.userId || user.id));

const fetchData = () => fetch('https://us-central1-voiceservice-217021.cloudfunctions.net/stats').then(response => response.json());
const fetchUsers = () => fetch('https://us-central1-voiceservice-217021.cloudfunctions.net/users').then(response => response.json());

const getPercentage = (part, amount) => Math.round(100 * (part / amount));

const populateStatsValues = allUsers => {
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

	elements.usersAmountLabel.innerHTML = users.length;
	elements.usersActiveLabel.innerHTML = activeUsers.length;
	elements.users21DaysLabel.innerHTML = `${retention21Users.length} / ${days21AgoUsers.length} = ${getPercentage(retention21Users.length, days21AgoUsers.length)}%`;
	elements.usersTenVoicedLabel.innerHTML = voicedTenUsers.length;
	elements.usersVoicedLabel.innerHTML = `${voicedUsers.length} / ${artcilesAddedUsers.length} = ${getPercentage(voicedUsers.length, artcilesAddedUsers.length)}% (${voicedUsers.length} / ${users.length} = ${getPercentage(voicedUsers.length, users.length)}%)`;
	elements.usersAddedArticlesLabel.innerHTML = `${artcilesAddedUsers.length} / ${users.length} = ${getPercentage(artcilesAddedUsers.length, users.length)}%`;
	elements.usersTenArticlesLabel.innerHTML = articlesTenUsers.length;
};

const populateUsersValues = allUsers => {
    const users = filterNotRealUsers(allUsers);

    const positiveUsers = users.filter(user => user.offerFirstStep > user.offerSecondStep);
    const negativeUsers = users.filter(user => user.offerSecondStep > user.offerFirstStep);
    const votedUsers = users.filter(user => user.offerSecondStep !== user.offerFirstStep);

    elements.usersVotedLabel.innerHTML = `${votedUsers.length} / ${users.length} = ${getPercentage(votedUsers.length, users.length)}%`;
    elements.usersPositiveLabel.innerHTML = `${positiveUsers.length} / ${votedUsers.length} = ${getPercentage(positiveUsers.length, votedUsers.length)}%`;
    elements.usersNegativeLabel.innerHTML = `${negativeUsers.length} / ${votedUsers.length} = ${getPercentage(negativeUsers.length, votedUsers.length)}%`;
};

const showError = () => console.log('Sorry, request failed');

const onGetDataClicked = () => {
	fetchData()
		.then(populateStatsValues)
		.catch(showError);
};

const onGetUsersDataClicked = () => {
    fetchUsers()
        .then(populateUsersValues)
        .catch(showError);
};

document.addEventListener("DOMContentLoaded", () => {
	setupComponents();

    elements.getDataButton.addEventListener('click', onGetDataClicked);
    elements.getUsersDataButton.addEventListener('click', onGetUsersDataClicked);
});
