import React, { useContext } from 'react';
import { Context } from '../context/appContext';

export default function FetchData() {
  const { courts, loading } = useContext(Context);

  return(
    <>
      {loading ? 
        <h1> Loading... </h1> : 
        courts.map((c, index) => (
          <h2>{c.name}</h2>
        ))
      }
      {}
    </>
  )
}
