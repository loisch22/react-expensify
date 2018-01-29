// make connection to firebase
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBYAYy7Bel458lUvW7tguqel7kg2DLbxUQ",
  authDomain: "expensify-bd702.firebaseapp.com",
  databaseURL: "https://expensify-bd702.firebaseio.com",
  projectId: "expensify-bd702",
  storageBucket: "expensify-bd702.appspot.com",
  messagingSenderId: "792521760930"
};

firebase.initializeApp(config);

// database is tool provided by fb - gets ref to root of db - set lets you provide the data key value pairs - check firebase database to see this updated data
firebase.database().ref().set({
  name: 'Lois C'
});
