import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

export default function AddCourt() {

  const postCourt = async(e) => {
    e.preventDefault();
    try {
      let result = await fetch('https://webhook.site/a91aac90-5cd7-4775-ba45-cd7c80d4061f', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.name.value,
          address: `${e.target.street.value}, ${e.target.city.value}, ${e.target.state.value}, ${e.target.zipcode.value.toString()}`,
          numberOfHoops: e.target.numberOfHoops.value,
          totalRatingCount: 0,
          totalRating: 0,
          isIndoor: e.target.indoorRadio.value === 1 ? true : false,
          isCovidOpen: true
        })
      });

      console.log(result);

    } catch(e) {
      console.log(e);
    }
  };

  return(
    <Form onSubmit={postCourt}>
      <h1> Add a new Court </h1>
      <Row>
        <Col>
          <Label for="name">Name</Label>
          <Input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Enter Basketball Court Name.." 
          />
        </Col>
        <Col xs="2">
          <Label for="numberOfHoops">Number of Hoops</Label>
          <Input
            type="number"
            name="numberOfHoops"
            id="numberOfHoops"
          />
        </Col>

      </Row>

      <Row>
        <Col xs="5">
          <Label for="street">Street</Label>
          <Input 
            type="text" 
            name="street" 
            id="street" 
            placeholder="Street" 
          />
        </Col>
        <Col xs="3">
          <Label for="city">City</Label>
          <Input 
            type="text" 
            name="city" 
            id="city" 
            placeholder="City" 
          />
        </Col>
        <Col xs="2">
          <Label for="state">State</Label>
          <Input 
            type="text" 
            name="state" 
            id="state" 
            placeholder="State" 
          />
        </Col>
        <Col xs="2">
          <Label for="zipcode">Zipcode</Label>
          <Input 
            type="number" 
            name="zipcode" 
            id="zipcode" 
            placeholder="Zipcode" 
          />
        </Col>
      </Row>

      <FormGroup tag="fieldset">
        <legend>Indoor or Outdoor?</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="indoorRadio" value="1"/>
            Indoor
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="indoorRadio" value="0" />
            Outdoor
          </Label>
        </FormGroup>
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Is this Court open during COVID-19?</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="covidRadio" value="1"/>
            Yes
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="covidRadio" value="0" />
            No
          </Label>
        </FormGroup>
      </FormGroup>
      <Button type="submit" color="success">Add</Button>
    </Form>
  )
};