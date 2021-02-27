import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDHUvha2PIq_Hh_OLbuyhaPTRCo9sQbFdA",
    authDomain: "crwn-db-1c7a8.firebaseapp.com",
    projectId: "crwn-db-1c7a8",
    storageBucket: "crwn-db-1c7a8.appspot.com",
    messagingSenderId: "718241144742",
    appId: "1:718241144742:web:325b2e7f70a291bd29f967",
    measurementId: "G-Y9D0GLP4Y4"
  };



  export const createUserProfileDocument = async (userAuth, addionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try {
        console.log('try');
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }


  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()


  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt: 'select_account'})


  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase