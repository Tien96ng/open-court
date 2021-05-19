import React, { Component } from 'react';
import Footer from './Footer';
import NavMenu  from './NavMenu';
import LoginToast from './LoginToast';

export function Layout({children}) {
  return(
    <>
      <NavMenu />
      <LoginToast />
      {children}
      <Footer />
    </>
  )
}
