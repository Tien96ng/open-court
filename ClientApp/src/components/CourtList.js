import React, { useContext, useState, useEffect } from "react";
import { Label, Input, Button, FormGroup, Card, CardText, CardTitle, Container } from "reactstrap"
import { Context } from "../context/appContext";
import 'font-awesome/css/font-awesome.min.css';

export default function CourtList() {
  const { courts, search, setSearchResults, searchResults } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sort: "Name",
    isIndoor: "Outdoor",
    isCovidOpen: "Covid Regulated",
    state: "America",
    totalReviews: 0,
  });
  
  const renderStateName = () => {
    let count = 0;
    let filteredCourts = courts.filter(c => c.address.toUpperCase().includes(search));
    filteredCourts.forEach(c => {
      count += c.reviews.length
    });
    setSearchResults(filteredCourts);
    setFilters({...filters, totalReviews: count});
  };

  const compareNames = (a, b) => {
    if (a.name < b.name){
      return -1;
    }
    if (a.name > b.name){
      return 1;
    }
    return 0;
  }

  const compareMostReviewed = (a, b) => {
    if (a.totalRatingCount < b.totalRatingCount){
      return -1;
    }
    if (a.totalRatingCount > b.totalRatingCount){
      return 1;
    }
    return 0;
  }

  const compareHighestRated = (a, b) => {
    if ((a.totalRating / a.totalRatingCount) < (b.totalRating / b.totalRatingCount)){
      return -1;
    }
    if ((a.totalRating / a.totalRatingCount) > (b.totalRating / b.totalRatingCount)){
      return 1;
    }
    return 0;
  }

  const compareHoops = (a, b) => {
    if (a.numberOfHoops > b.numberOfHoops){
      return -1;
    }
    if (a.numberOfHoops < b.numberOfHoops){
      return 1;
    }
    return 0;
  }

  const checkSortType = () => {
    if(filters.sort === "Name") {
      setSearchResults(searchResults.sort(compareNames));
    } else if(filters.sort === "Most Reviewed") {
      setSearchResults(searchResults.sort(compareMostReviewed));
    } else if(filters.sort === "Highest Rated") {
      setSearchResults(searchResults.sort(compareHighestRated));
    } else if(filters.sort === "Number of Hoops") {
      setSearchResults(searchResults.sort(compareHoops));
    }
  }

  const renderStars = (total, count) => {
    if(count === 0) {
      return(
        <>
          <i className="fa fa-star white-blk-outline"></i>
          <i className="fa fa-star white-blk-outline"></i>
          <i className="fa fa-star white-blk-outline"></i>
          <i className="fa fa-star white-blk-outline"></i>
          <i className="fa fa-star white-blk-outline"></i>
        </>
      ) 
    } else {
      let avg = (total / count) / 100;
      let numStars = Math.floor(5 * avg);
      let emptyStars = 5 - numStars;
      return(
        <>
          {[...Array(numStars)].map(s => {
            return <i className="fa fa-star orange-text"></i>
          })}
          {[...Array(emptyStars)].map(s => {
            return <i className="fa fa-star white-blk-outline"></i>
          })}
        </>
      )
    }
  }

  const renderLists = () => {
    checkSortType();

    return (
      <>
        {
          searchResults.map(c => {
            return(
              <Card body className="court-card bgc-wheat" key={c.courtId}>
                <CardTitle tag="h5">{c.name} </CardTitle>
                <CardText>{c.address}</CardText>
                <CardText>{renderStars(c.totalRating, c.totalRatingCount)}</CardText>
                <CardText>{c.reviews.length} Reviews </CardText>
              </Card>
            )
          })
        }
      </>
    )
  }

  useEffect(() => {
    renderStateName();
    setTimeout(() => {
      setLoading(false);
      renderStateName();
    }, 1000);
    return () => {
      console.log("Clean up SearchResults.");
    }
  }, [loading, search])

  useEffect(() => {
    console.log("searchResults Changed!")
    if(searchResults.length > 0) {
      search === "" ? setFilters({...filters, state: "America"}) : setFilters({...filters, state: search});
      //setFilters({...filters, state: searchResults[0].address.split(", ")[2]});
    }
    return () => {
      console.log("Clean up Filters.")
    }
  }, [search, searchResults]);

  const updateSort = e => {
    if (e.target.checked) {
      setFilters({...filters, sort: e.target.value})
    }
  };

  const updateIndoor = e => {
    console.log(e.target.value)
    if (e.target.checked) {
      setFilters({...filters, isIndoor: e.target.value})
    }
  };

  const updateCovid = e => {
    console.log(e.target.value)
    if (e.target.checked) {
      setFilters({...filters, isCovidOpen: e.target.value})
    }
  };

  return(
    <Container className="container-margin-top">
      <div className="row">
        <div className="column-1">
          <div className="left-column">
            <h1 className="page-subtitle">Courts in <br /><span className="orange-text">{filters.state}</span></h1>
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
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="sortRadio" value="Number of Hoops" onChange={updateSort} />
                  Most Hoops
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend className="bold">Setting</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="indoorRadio" value="Outdoor" defaultChecked onChange={updateIndoor} />
                  Outdoor
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="indoorRadio" value="Indoor" onChange={updateIndoor} />
                  Indoor
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend className="bold">Covid Safe</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="covidRadio" value="Covid Regulated" defaultChecked onChange={updateCovid} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="covidRadio" value="Closed via Covid" onChange={updateCovid} />
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
            <p>
              <span style={{ marginRight: "0.5rem"}}>Hint: </span>
              <span style={{ marginRight: "0.5rem"}}>2 out of 5 Average Rating</span>
              <i className="fa fa-star orange-text"></i>
              <i className="fa fa-star orange-text"></i>
              <i className="fa fa-star white-blk-outline"></i>
              <i className="fa fa-star white-blk-outline"></i>
              <i className="fa fa-star white-blk-outline"></i>
            </p>
            <Button outline size="sm" color="secondary">Sorted by {filters.sort}</Button>
            <Button style={{ marginLeft: "1rem"}} outline size="sm" color="secondary">Showing courts {filters.isIndoor}</Button>
            <Button style={{ marginLeft: "1rem"}} outline size="sm" color="secondary">Showing courts {filters.isCovidOpen}</Button>
            {renderLists()}
          </div>
        </div>
      </div>
    </Container>
  )
}