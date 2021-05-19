import React, { useContext } from 'react';
import { Context } from '../context/appContext';
import { Row, Col } from 'reactstrap';

export default function CourtList() {
  const { courts } = useContext(Context);
  return(
    <>
    <h1>Hello World</h1>
      <div class='row'>
        <div class='column-1'>
          <div class='left-column'>
            Some Text in Column One
          </div>
        </div>
        <div class='column-3'>
          <div class='right-column'>
            Some Text in Column Two
          </div>
        </div>
      </div>
    </>
  )
}