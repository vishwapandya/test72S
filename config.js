import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA8K2Rq1NJIYNDWYcCTZkwt9II5W5ns6jg",
    authDomain: "wireleibrary-87d79.firebaseapp.com",
    projectId: "wireleibrary-87d79",
    storageBucket: "wireleibrary-87d79.appspot.com",
    messagingSenderId: "970138415382",
    appId: "1:970138415382:web:f587edc099d96a6a37a037"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()