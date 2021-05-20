import React, { useContext } from 'react';
import { Context } from '../context/appContext';
import { Container } from 'reactstrap';
import AddCourt from './AddCourt';

export default function FetchData() {
  const { user } = useContext(Context);

  return(
    <Container className="container-margin-top">
      {
        user === null ? 
        <h2 className="section-title page-subtitle center-text red-text">Please Sign in to access this page!</h2> :
        <AddCourt />
      }
    </Container>
  )
};
