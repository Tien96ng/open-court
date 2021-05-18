import React, { useContext } from 'react';
import { Context } from '../context/appContext';
import { GoogleLogin } from 'react-google-login';

export default function SignIn() {
  const { user, setUser } = useContext(Context);

  const responseGoogle = (response) => {
    console.log(response)
  }

  const onSuccess = async(response) => {
    let userObj = await {
      id: response.profileObj.googleId,
      email: response.profileObj.email,
      name: response.profileObj.name,
      profilePic: response.profileObj.imageUrl
    } 

    console.log(userObj);
    setUser(userObj);
  }

  return(
    <>
      <GoogleLogin 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={responseGoogle}
      />
      <button type="click" onClick={() => console.log(user)}> Check User </button>
    </>
  )
}