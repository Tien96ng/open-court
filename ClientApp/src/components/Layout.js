import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu  from './NavMenu';

export function Layout({children}) {
  return(
    <>
      <NavMenu />
      <Container>
        {children}
      </Container>
    </>
  )
}
