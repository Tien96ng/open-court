import React, { useContext, useState, useEffect } from "react";
import { Row, Col, Label, Input, Button, FormGroup } from "reactstrap"
import { Context } from "../context/appContext";

export default function CourtList() {
  const { courts, search, setSearchResults, searchResults } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sort: "Name",
    isIndoor: false,
    isCovidOpen: true,
    state: "America",
    totalReviews: 0
  });
  
  const renderStateName = () => {
    let count = 0;
    let filteredCourts = courts.filter(c => c.address.includes(search));
    filteredCourts.forEach(c => count += c.totalRatingCount);
    setSearchResults(filteredCourts);
    setFilters({...filters, totalReviews: count});
  };

  useEffect(() => {
    renderStateName();
    setTimeout(() => {
      setLoading(false);
      renderStateName();
    }, 1000);
    return () => {
      console.log("Clean up SearchResults.");
    }
  }, [loading])

  useEffect(() => {
    console.log("searchResults Changed!")
    if(searchResults.length > 0) {
      setFilters({...filters, state: searchResults[0].address.split(", ")[2]});
    }
    return () => {
      console.log("Clean up Filters.")
    }
  }, [searchResults]);

  const updateSort = e => {
    if (e.target.checked) {
      console.log(e.target.value);
      setFilters({...filters, sort: e.target.value})
    }
  };

  return(
    <>
      <div className="row">
        <div className="column-1">
          <div className="left-column">
            <h1 className="page-subtitle">Courts in {filters.state}</h1>
            <h6>{filters.totalReviews} user reviews</h6>
           
            <FormGroup tag="fieldset">
              <legend className="bold">Sort</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="sortRadio" value="Name" defaultChecked onChange={updateSort}/>
                  Name
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="sortRadio" value="Most Reviewed" onChange={updateSort}/>
                  Most Reviewed
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="sortRadio" value="Highest Rated" onChange={updateSort} />
                  Highest Rated
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend className="bold">Setting</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="indoorRadio" value={true} defaultChecked/>
                  Indoor
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="indoorRadio" value={false} />
                  Outdoor
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend className="bold">Covid Safe</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="covidRadio" value={true} defaultChecked/>
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="covidRadio" value={false} />
                  No
                </Label>
              </FormGroup>
            </FormGroup>
          </div>
        </div>
        <div className="column-3">
          <div className="right-column">
            {
              loading ? 
              <h2>No Courts Found</h2> : 
              <h2>
                <span className="orange-text">{searchResults.length} courts</span> match your search 
              </h2>
            }
            <br />
            <Button outline size="sm" color="secondary">Sorted by {filters.sort}</Button>
            <Button style={{ marginLeft: "1rem"}} outline size="sm" color="secondary">Showing courts {filters.isIndoor ? "Indoor" : "Outdoor"}</Button>
            <Button style={{ marginLeft: "1rem"}} outline size="sm" color="secondary">Showing courts {filters.isCovidOpen ? "Closed by Covid" : "Covid Regulated"}</Button>
          </div>
        </div>
      </div>
    </>
  )
}