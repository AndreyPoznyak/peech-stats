import 'normalize.css/normalize.css';
import './styles/index.scss';

import {MDCRipple} from '@material/ripple';
import {MDCLinearProgress} from '@material/linear-progress';

const apiBaseURL = 'https://us-central1-voiceservice-217021.cloudfunctions.net';

const today = new Date();
const days30Ago = today.setDate(today.getDate() - 30);
const days7Ago = today.setDate(today.getDate() - 7);
const days1Ago = today.setDate(today.getDate() - 1);
const msPerDay = 1000 * 60 * 60 * 24;

let elements = {};

const setupComponents = () => {
    elements = {
        progressBar: new MDCLinearProgress(document.querySelector('.mdc-linear-progress')),

        getDataButton: document.querySelector('.get-stats-data'),
        getUsersDataButton: document.querySelector('.get-users-data'),
        usersAmountLabel: document.querySelector('.users-amount'),

        usersAddedStraightAmountLabel: document.querySelector('.users-added-first-amount'),
        usersVoicedStraightAmountLabel: document.querySelector('.users-voiced-first-amount'),

        users1DayLabel: document.querySelector('.users-retention-one-amount'),
        users7DaysLabel: document.querySelector('.users-retention-seven-amount'),
        users30DaysLabel: document.querySelector('.users-retention-thirty-amount'),

        users1DayAdded0Label: document.querySelector('.users-retention-one-add-one-amount'),
        users7DaysAdded0Label: document.querySelector('.users-retention-seven-add-one-amount'),
        users30DaysAdded0Label: document.querySelector('.users-retention-thirty-add-one-amount'),

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

    elements.progressBar.determinate = false;
	elements.progressBar.close();
};

const notUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 34, 37, 40, 43, 65];

const filterNotRealUsers = users => users.filter(user => !notUsers.includes(user.userId || user.id));

const fetchData = () => fetch(`${apiBaseURL}/stats`).then(response => response.json());
const fetchUsers = () => fetch(`${apiBaseURL}/users`).then(response => response.json());

const getPercentage = (part, amount) => Math.round(100 * (part / amount));
const getPercentLabel = (partList, fullList) => `${partList.length} / ${fullList.length} = ${getPercentage(partList.length, fullList.length)}%`;

const populateStatsValues = allUsers => {
	const users = filterNotRealUsers(allUsers);

	const activeUsers = users.filter(user => new Date(user.lastAddedArticleDate).getTime() > days30Ago);

	const voicedUsers = users.filter(user => user.voicedArticlesCount > 0);
	const voicedTenUsers = users.filter(user => user.voicedArticlesCount > 9);
	const articlesTenUsers = users.filter(user => user.articlesCount > 9);
	const articlesAddedUsers = users.filter(user => user.articlesCount > 0);

	elements.usersAmountLabel.innerHTML = users.length;
	elements.usersActiveLabel.innerHTML = activeUsers.length;

	elements.usersVoicedLabel.innerHTML = `${getPercentLabel(voicedUsers, articlesAddedUsers)} (${getPercentLabel(voicedUsers, users)})`;
	elements.usersAddedArticlesLabel.innerHTML = getPercentLabel(articlesAddedUsers, users);

	elements.usersTenArticlesLabel.innerHTML = articlesTenUsers.length;
	elements.usersTenVoicedLabel.innerHTML = voicedTenUsers.length;

	populateRetention(users);

    elements.progressBar.close();
};

const populateRetention = users => {
	const added0Users = users.filter(user => new Date(user.registrationDate).getTime() - new Date(user.firstAddedArticleDate).getTime() < msPerDay);
	const voiced0Users = users.filter(user => new Date(user.registrationDate).getTime() - new Date(user.firstVoicedArticleDate).getTime() < msPerDay);

	const days1AgoUsers = users.filter(user => new Date(user.registrationDate).getTime() <= days1Ago);
	const days7AgoUsers = users.filter(user => new Date(user.registrationDate).getTime() <= days7Ago);
	const days30AgoUsers = users.filter(user => new Date(user.registrationDate).getTime() <= days30Ago);

	const days1AgoAdded0Users = added0Users.filter(user => new Date(user.registrationDate).getTime() <= days1Ago);
	const days7AgoAdded0Users = added0Users.filter(user => new Date(user.registrationDate).getTime() <= days7Ago);
	const days30AgoAdded0Users = added0Users.filter(user => new Date(user.registrationDate).getTime() <= days30Ago);

	const retention1Users = days1AgoUsers.filter(user => ( new Date(user.lastAddedArticleDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 1);
	const retention7Users = days7AgoUsers.filter(user => ( new Date(user.lastAddedArticleDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 7);
	const retention30Users = days30AgoUsers.filter(user => ( new Date(user.lastAddedArticleDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 30);

	const retention1Added0Users = days1AgoAdded0Users.filter(user => ( new Date(user.lastAddedArticleDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 1);
	const retention7Added0Users = days7AgoAdded0Users.filter(user => ( new Date(user.lastAddedArticleDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 7);
	const retention30Added0Users = days30AgoAdded0Users.filter(user => ( new Date(user.lastAddedArticleDate).getTime() - new Date(user.registrationDate).getTime()) / msPerDay > 30);

	elements.usersAddedStraightAmountLabel.innerHTML = added0Users.length;
	elements.usersVoicedStraightAmountLabel.innerHTML = voiced0Users.length;

	elements.users1DayLabel.innerHTML = getPercentLabel(retention1Users, days1AgoUsers);
	elements.users7DaysLabel.innerHTML = getPercentLabel(retention7Users, days7AgoUsers);
	elements.users30DaysLabel.innerHTML = getPercentLabel(retention30Users, days30AgoUsers);

	elements.users1DayAdded0Label.innerHTML = getPercentLabel(retention1Added0Users, days1AgoAdded0Users);
	elements.users7DaysAdded0Label.innerHTML = getPercentLabel(retention7Added0Users, days7AgoAdded0Users);
	elements.users30DaysAdded0Label.innerHTML = getPercentLabel(retention30Added0Users, days30AgoAdded0Users);
};

const populateUsersValues = allUsers => {
    const users = filterNotRealUsers(allUsers);

    const positiveUsers = users.filter(user => user.offerFirstStep > user.offerSecondStep);
    const negativeUsers = users.filter(user => user.offerSecondStep > user.offerFirstStep);
    const votedUsers = users.filter(user => user.offerSecondStep !== user.offerFirstStep);

    const fbUsers = users.filter(user => !!user.facebookId);
    const gmailUsers = users.filter(user => !!user.googleId);

    elements.usersVotedLabel.innerHTML = `${votedUsers.length} / ${users.length} = ${getPercentage(votedUsers.length, users.length)}%`;
    elements.usersPositiveLabel.innerHTML = getPercentLabel(positiveUsers, votedUsers);
    elements.usersNegativeLabel.innerHTML = getPercentLabel(negativeUsers, votedUsers);

    elements.usersFbLabel.innerHTML = getPercentage(fbUsers, users);
    elements.usersGmailLabel.innerHTML = getPercentage(gmailUsers, users);

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
