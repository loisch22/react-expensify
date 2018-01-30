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

// remove single subscription
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e); 
});

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);

// unsubscribe to changes aka no more console log
setTimeout(() => {
  database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(30);
}, 10500);



// fetch data once never re-runs
// database.ref('location/cit')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Lois C',
//   age: 27,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Seattle',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Seattle',
//   'job/company': 'Amazon'
// });


// const databaseRef = database.ref('isSingle');
//
// databaseRef.remove().then(() => {
//   console.log('Relationship status has been deleted');
// }).catch((e) => {
//   console.log('Sorry, deletion failed.', e);
// });
