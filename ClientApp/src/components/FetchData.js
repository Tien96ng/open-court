import React, { useContext } from 'react';
import { Context } from '../context/appContext';
import { Container } from 'reactstrap';
import AddCourt from './AddCourt';

export default function FetchData() {
  const { courts, loading } = useContext(Context);

  return(
    <Container className="container-margin-top">
      <AddCourt />
      {loading ? 
        <h1> Loading... </h1> : 
        courts.map((c, index) => (
          <div key={c.courtId}>
            <h2>{c.name} - {c.address}</h2>
          </div>
        ))
      }
    </Container>
  )
}
