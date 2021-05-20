import React from 'react';
import {  Card, CardText, CardTitle } from 'reactstrap';

export default function CourtCard({id, name, address, renderStars, hoops, reviews}) {
  return(
    <Card body className="court-card bgc-wheat" key={id}>
      <CardTitle tag="h5">{name} </CardTitle>
      <CardText>{address}</CardText>
      <CardText>{renderStars}</CardText>
      <CardText>{hoops} Hoops </CardText>
      <CardText>{reviews} Reviews </CardText>
    </Card>
  )
};
