import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
// import { TwitterLoginButton } from "react-social-login-buttons";


function SocialProfileSignIn({ setErrors }) {
  const history = useHistory();
  const { loginWithFacebook, loginWithGoogle } = useAuth();

  const handleFacebookAuth = async () => {
    try {
      await loginWithFacebook();
      history.push('/');
    } catch (err) {
      setErrors([err]);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await loginWithGoogle();
      history.push('/');
    } catch (err) {
      setErrors([err]);
    }
  };

  return (
    <>
<FacebookLoginButton onClick={handleFacebookAuth} />
      <GoogleLoginButton onClick={handleGoogleAuth} />
   
    </>
  );
}

export default SocialProfileSignIn;