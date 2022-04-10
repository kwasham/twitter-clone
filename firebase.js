// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAOmWcDDyJjYAlNMhfG5eC7qMYhqplsC4Y',
  authDomain: 'twitter-clone-7f05b.firebaseapp.com',
  projectId: 'twitter-clone-7f05b',
  storageBucket: 'twitter-clone-7f05b.appspot.com',
  messagingSenderId: '148216780182',
  appId: '1:148216780182:web:0f8c493019a1612d27f9b7',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
