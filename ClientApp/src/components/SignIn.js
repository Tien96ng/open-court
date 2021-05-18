import React from 'react';
import { Button } from 'reactstrap';
import { GoogleLogin } from 'react-google-login';

export default function SignIn() {

  const responseGoogle = (response) => {
    console.log(response)
  }

  return(
    <>
      <GoogleLogin 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  )
}