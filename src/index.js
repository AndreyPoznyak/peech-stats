import 'normalize.css/normalize.css';
import './styles/index.scss';

import {MDCRipple} from '@material/ripple';
import {MDCLinearProgress} from '@material/linear-progress';

const apiBaseURL = 'https://us-central1-voiceservice-217021.cloudfunctions.net';

let elements = {};

const setupComponents = () => {
    elements = {
        progressBar: new MDCLinearProgress(document.querySelector('.mdc-linear-progress')),
        getDataButton: document.querySelector('.get-stats-data'),
        getUsersDataButton: document.querySelector('.get-users-data'),
        usersAmountLabel: document.querySelector('.users-amount'),
        users1DayLabel: document.querySelector('.users-retention-one-amount'),
        users7DaysLabel: document.querySelector('.users-retention-seven-amount'),
        users30DaysLabel: document.querySelector('.users-retention-thirty-amount'),
        usersActiveLabel: document.querySelector('.users-active-amount'),
        usersTenVoicedLabel: document.querySelector('.users-ten-voiced-amount'),
        usersTenArticlesLabel: document.querySelector('.users-ten-articles-amount'),
        usersVoicedLabel: document.querySelector('.users-voiced-amount'),
        usersAddedArticlesLabel: document.querySelector('.users-articles-amount'),
        usersPositiveLabel: document.querySelector('.users-positive-amount'),
        usersNegativeLabel: document.querySelector('.users-negative-amount'),
        usersVotedLabel: document.querySelector('.users-voted-amount'),
        usersFbLabel: document.querySelector('.users-fb-amount'),
        usersGmailLabel: document.querySelector('.users-gmail-amount'),
	};

    new MDCRipple(elements.getDataButton);
    new MDCRipple(elements.getUsersDataButton);

    elements.determinate = false;
};

const notUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 34, 37, 40, 43, 65];

const filterNotRealUsers = users => users.filter(user => !notUsers.includes(user.userId || user.id));

const fetchData = () => fetch(`${apiBaseURL}/stats`).then(response => response.json());
const fetchUsers = () => fetch(`${apiBaseURL}/users`).then(response => response.json());

const getPercentage = (part, amount) => Math.round(100 * (part / amount));

const populateStatsValues = allUsers => {
	const users = filterNotRealUsers(allUsers);
	const today = new Date();
	const days30Ago = new Date().setDate(today.getDate() - 30);
	const days7Ago = new Date().setDate(today.getDate() - 7);
	const days1Ago = new Date().setDate(today.getDate() - 1);
	const msPerDay = 1000 * 60 * 60 * 24;

	const activeUsers = users.filter(user => new Date(user.lastArticleAddDate).getTime() > days30Ago);
	const days1AgoUsers = users.filter(user => new Date(user.registrationDate).getTime() <= days1Ago);
	const days7AgoUsers = users.filter(user => new Date(user.registrationDate).getTime() <= days7Ago);
	const days30AgoUsers = users.filter(user => new Date(user.registrationDate).getTime() <= days30Ago);
	const voicedUsers = users.filter(user => user.voicedArticlesCount > 0);
	const voicedTenUsers = users.filter(user => user.voicedArticlesCount > 9);
	const articlesTenUsers = users.filter(user => user.articlesCount > 9);
	const artcilesAddedUsers = users.filter(user => user.articlesCount > 0);
	const retention1Users = days1AgoUsers.filter(user => ( new Date(user.lastArticleAddDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 1);
	const retention7Users = days7AgoUsers.filter(user => ( new Date(user.lastArticleAddDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 7);
	const retention30Users = days30AgoUsers.filter(user => ( new Date(user.lastArticleAddDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 30);

	elements.usersAmountLabel.innerHTML = users.length;
	elements.usersActiveLabel.innerHTML = activeUsers.length;
	elements.users1DayLabel.innerHTML = `${retention1Users.length} / ${days1AgoUsers.length} = ${getPercentage(retention1Users.length, days1AgoUsers.length)}%`;
	elements.users7DaysLabel.innerHTML = `${retention7Users.length} / ${days7AgoUsers.length} = ${getPercentage(retention7Users.length, days7AgoUsers.length)}%`;
	elements.users30DaysLabel.innerHTML = `${retention30Users.length} / ${days30AgoUsers.length} = ${getPercentage(retention30Users.length, days30AgoUsers.length)}%`;
	elements.usersTenVoicedLabel.innerHTML = voicedTenUsers.length;
	elements.usersVoicedLabel.innerHTML = `${voicedUsers.length} / ${artcilesAddedUsers.length} = ${getPercentage(voicedUsers.length, artcilesAddedUsers.length)}% (${voicedUsers.length} / ${users.length} = ${getPercentage(voicedUsers.length, users.length)}%)`;
	elements.usersAddedArticlesLabel.innerHTML = `${artcilesAddedUsers.length} / ${users.length} = ${getPercentage(artcilesAddedUsers.length, users.length)}%`;
	elements.usersTenArticlesLabel.innerHTML = articlesTenUsers.length;

    elements.progressBar.close();
};

const populateUsersValues = allUsers => {
    const users = filterNotRealUsers(allUsers);

    const positiveUsers = users.filter(user => user.offerFirstStep > user.offerSecondStep);
    const negativeUsers = users.filter(user => user.offerSecondStep > user.offerFirstStep);
    const votedUsers = users.filter(user => user.offerSecondStep !== user.offerFirstStep);

    const fbUsers = users.filter(user => !!user.facebookId);
    const gmailUsers = users.filter(user => !!user.googleId);

    elements.usersVotedLabel.innerHTML = `${votedUsers.length} / ${users.length} = ${getPercentage(votedUsers.length, users.length)}%`;
    elements.usersPositiveLabel.innerHTML = `${positiveUsers.length} / ${votedUsers.length} = ${getPercentage(positiveUsers.length, votedUsers.length)}%`;
    elements.usersNegativeLabel.innerHTML = `${negativeUsers.length} / ${votedUsers.length} = ${getPercentage(negativeUsers.length, votedUsers.length)}%`;

    elements.usersFbLabel.innerHTML = `${fbUsers.length} / ${users.length}`;
    elements.usersGmailLabel.innerHTML = `${gmailUsers.length} / ${users.length}`;

    elements.progressBar.close();
};

const showError = () => {
    elements.progressBar.close();
    console.log('Sorry, request failed')
};

const onGetDataClicked = () => {
    elements.progressBar.open();

    fetchData()
		.then(populateStatsValues)
		.catch(showError);
};

const onGetUsersDataClicked = () => {
    elements.progressBar.open();

    fetchUsers()
        .then(populateUsersValues)
        .catch(showError);
};

document.addEventListener("DOMContentLoaded", () => {
	setupComponents();

    elements.getDataButton.addEventListener('click', onGetDataClicked);
    elements.getUsersDataButton.addEventListener('click', onGetUsersDataClicked);
});
