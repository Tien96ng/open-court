import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/appContext';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import blankProfile from '../img/blank-face.jpeg'

export default function LoginToast() {
  const { user } = useContext(Context);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  }, [user])


  const renderToast = () => {
    return(
      <Toast className={"toast-notification " + (isVisible ? "fade-in" : "fade-out")}>
        <ToastHeader>
          {user === null ? "Hello Guest!" : `Welcome back, ${user.name}!`}
        </ToastHeader>
        <ToastBody>
          <div className="row">
            <div className="column-1">
              <div className="left-column">
                {user === null ? <img src={blankProfile} alt="placeholder profile pic" height="70"/> : <img src={user.profilePic} alt="profile pic" height="70"/>}
              </div>
            </div>
            <div className="column-3 padding-left-5">
              <div className="right-column">
                {
                  user === null ? 
                  "Please sign in with your Google account to view all the features OpenCourt offers!" :
                  `Please check your email: ${user.email} for updates!`  
                }
              </div>
            </div>
          </div>
        </ToastBody>
      </Toast>
    )
  }

  return(
    <>
      {renderToast()}
    </>
  )
};