import React, { useContext, useState, useEffect } from "react";
import { Row, Col } from "reactstrap"
import { Context } from "../context/appContext";

export default function CourtList() {
  const { courts, search, setSearchResults, searchResults } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sort: "name",
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
  }, [loading])

  useEffect(() => {
    console.log("searchResults Changed!")
    if(searchResults.length > 0) {
      setFilters({...filters, state: searchResults[0].address.split(", ")[2]});
    }
    return () => {
      console.log("Clean up Filters.")
    }
  }, [searchResults])

  return(
    <>
      <div className="row">
        <div className="column-1">
          <div className="left-column">
            <Row><h1 className="page-subtitle">Courts in {filters.state}</h1></Row>
            <Row><h6>{filters.totalReviews} hooper reviews</h6></Row>
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
          </div>
        </div>
      </div>
    </>
  )
}