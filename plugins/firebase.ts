import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = () => {
  return {
    apiKey: 'AIzaSyCwSmsdJGWSklKhH4sdzOBIS4k7tdshRLo',
    authDomain: 'honmemo-9a0eb.firebaseapp.com',
    projectId: 'honmemo-9a0eb',
    storageBucket: 'honmemo-9a0eb.appspot.com',
    messagingSenderId: '64080892242',
    appId: '1:64080892242:web:de3aca0105a0a78729ea8b',
    measurementId: 'G-LFFHKR1C4K'
  }
}

if (!firebase.apps.length) {
  const config = firebaseConfig()
  firebase.initializeApp(config)
  // if (process.browser) {
  // }
}

const firestore = firebase.firestore()

export { firebase, firestore }
