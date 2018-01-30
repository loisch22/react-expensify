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
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

const updateRef = database.ref();
updateRef.update({
  name: 'LoLo',
  age: 32,
  job: 'Software Developer',
  isSingle: null
});
// updates, creates new child 'job', delete isSingle using null

// const databaseRef = database.ref('isSingle');
//
// databaseRef.remove().then(() => {
//   console.log('Relationship status has been deleted');
// }).catch((e) => {
//   console.log('Sorry, deletion failed.', e);
// });
