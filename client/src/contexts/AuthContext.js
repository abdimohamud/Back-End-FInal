import React, { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth, db, database } from '../firebase/firebase';

const AuthContext = createContext();

// custom context hook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  /** Registration/Login helpers */

  // register with email
  function registerWithEmail(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // login with email
  function loginWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // authenticate with Facebook
  function loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return handlePopupAuth(provider);
  }

  // authenticate with Google
  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return handlePopupAuth(provider);
  }

    // authenticate with Google
    function loginWithTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider();
      return handlePopupAuth(provider);
    }

  // authenticate with popup
  function handlePopupAuth(provider) {
    return auth.signInWithPopup(provider);
  }

  // logout
  function signout() {
    setProfile(null);
    return auth.signOut();
  }

  function updatePic (user,url) {
    var updateUser = {
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: url
    }
    
    console.log(updateUser)
   return database.ref(`Users/${user.uid}`).update(updateUser)
  }

  // get the profile from firestore and set it to state
  function getProfile(user) {
    console.log(user)
    db.collection('Users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        // get a profile if it exists, if it doesn't, we need to create one
        if (doc.exists) {
          const userProfile = doc.data();
          setProfile(userProfile);
        } else {
          let newProfile = {};
          newProfile.photoURL = user.photoURL ? user.photoURL:'';
          newProfile.fullName =
            user.displayName !== '' ? user.displayName : user.email;
          newProfile.accountType = '';
          newProfile.signUpDate = user.signUpDate?user.signUpDate:'';
          newProfile.dob= user.dob?user.dob:'';
          newProfile.city = user.city?user.city:'';
          newProfile.country = user.country?user.country:'';
          newProfile.producerName= user.producerName?user.producerName:'';
          newProfile.email = user.email?user.email:'';
          setProfile(newProfile);
          db.collection('Users').doc(user.uid).set(newProfile);
          database.ref(`Users/${user.uid}`).set(newProfile)
        }
      });
  }

  // manage user status
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // when we get the user, we also need their profile
      setUser(user);
      user && getProfile(user);
      setLoading(false);
    });
  }, []);

  const value = {
    user,
    profile,
    updatePic,
    getProfile,
    registerWithEmail,
    loginWithEmail,
    loginWithFacebook,
    loginWithGoogle,
    loginWithTwitter,
    signout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}