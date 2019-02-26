import firebase from "firebase";

export const launch = () => {
	const config = {
		apiKey: "AIzaSyDzdPMZNjZCl3dn01c-3HPkVlhEC5dBc5g",
		authDomain: "keyusers-12483.firebaseapp.com",
		databaseURL: "https://keyusers-12483.firebaseio.com",
		projectId: "keyusers-12483",
		storageBucket: "keyusers-12483.appspot.com",
		messagingSenderId: "931744684548"
	};

	firebase.initializeApp(config);
};

export const saveEligibleDealerInfo = user => {
	firebase.database().ref('/dealers_eligible').push(user, result => console.log(result));
};

export const saveNotEligibleDealerInfo = user => {};