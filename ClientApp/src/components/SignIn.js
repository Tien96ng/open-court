import React, { useContext } from 'react';
import { Context } from '../context/appContext';
import { Button } from 'reactstrap';
import { GoogleLogin, GoogleLogout} from 'react-google-login';
import 'font-awesome/css/font-awesome.min.css';

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
          render={renderProps => (
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled} color="success" size="sm"><i className="fa fa-google"></i> Login</Button>
          )}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
        :
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={renderProps => (
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled} color="danger" size="sm"><i className="fa fa-sign-out"></i> Logout</Button>
          )}
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccess}
        />
      }
      
    </>
  )
}