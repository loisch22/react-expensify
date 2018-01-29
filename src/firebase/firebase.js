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

const database = firebase.database();

database.ref().set({
  name: 'Lois C',
  age: 27,
  isSingle: true,
  location: {
    city: 'Seattle',
    country: 'United States'
  }
});

database.ref('age').set(28);
database.ref('location/city').set('New York');
database.ref('attributes').set({
  height: 164,
  weight: 104
});
