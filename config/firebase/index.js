import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAifzMMaW35r5BigHd4YHQQztRzhIGW1oA',
  authDomain: 'roomclocker.firebaseapp.com',
  projectId: 'roomclocker',
  storageBucket: 'roomclocker.appspot.com',
  messagingSenderId: '204460992891',
  appId: '1:204460992891:web:f110f23a3ef2fb8aabf5de',
  measurementId: 'G-2DSWFVT6KB'
}

// Initialize Firebase

export default firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)
