import React, { useContext } from 'react';
import { Context } from '../context/appContext';
import { GoogleLogin, GoogleLogout} from 'react-google-login';

export default function SignIn() {
  const { user, setUser } = useContext(Context);

  const onFailure = (response) => {
    // setUser({error: "Failed to Login to Google Account."})
    console.log(response);
  }

  const onSuccess = async(response) => {
    let userObj = await {
      id: response.profileObj.googleId,
      email: response.profileObj.email,
      name: response.profileObj.name,
      profilePic: response.profileObj.imageUrl
    } 

    setUser(userObj);
  }

  const onLogoutSuccess = async(response) => {
    setUser(null);
  }

  const renderTryAgain = () => {
    if(user !== null && user.error !== undefined) {
      return <h2> {user.error} </h2>
    }
  }

  return(
    <>
      {renderTryAgain()}
      {
        user === null ? 
        <GoogleLogin 
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          theme="dark"
          icon={false}
        />
        :
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccess}
          theme="dark"
          icon={false}
        />
      }
      
    </>
  )
}