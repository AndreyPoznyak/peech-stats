import 'normalize.css/normalize.css';
import './styles/index.scss';

import firebase from "firebase/app";
import * as db from "firebase/database";

document.addEventListener("DOMContentLoaded", () => {
	console.log('here we go');

	const config = {
		apiKey: "<API_KEY>",
		authDomain: "<PROJECT_ID>.firebaseapp.com",
		databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
		projectId: "<PROJECT_ID>",
		//storageBucket: "<BUCKET>.appspot.com",
		//messagingSenderId: "<SENDER_ID>",
	};

	firebase.initializeApp(config);
});
