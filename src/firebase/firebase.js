import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed event triggered when child is removed
// gives more info on what exactly was changed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('Child changed', snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('Child added:', snapshot.key, snapshot.val());
// });

// creates new array with list objects from firebase
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Dog food',
//   note: 'Chicken',
//   amount: 20,
//   createdAt: 1000
// });

// push creates new property on our ref aka notes,
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular'
// });

// create list of objects instead of array of objects
// const firebaseNotes = {
//   notes: {
//     asdklf: {
//       title: 'First Note',
//       body: 'Note one'
//     },
//     asdfjj: {
//       title: 'Second Note',
//       body: 'Note two'
//     }
//   }
// };
//
// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'Note one'
// },
// {
//   id: '123',
//   title: 'Second Note',
//   body: 'Note two'
// }];
//
// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
//
// setTimeout(() => {
//   database.ref().update({
//     name: 'Lindy Choi',
//     'job/company': 'Facebook'
//   });
// }, 3000);

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
