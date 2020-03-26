import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
	apiKey: 'AIzaSyCbLEVV6sPCjV6OCUpwEgEeVrA-QoLEnpc',
	authDomain: 'react-slack-clone-9b4cf.firebaseapp.com',
	databaseURL: 'https://react-slack-clone-9b4cf.firebaseio.com',
	projectId: 'react-slack-clone-9b4cf',
	storageBucket: 'react-slack-clone-9b4cf.appspot.com',
	messagingSenderId: '976814180441',
	appId: '1:976814180441:web:e63b15d45b970a17f2c948',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
