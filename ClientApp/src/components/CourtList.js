import React, { useContext, useState, useEffect } from "react";
import { render } from "react-dom";
import { Context } from "../context/appContext";

export default function CourtList() {
  const { courts, search, setSearchResults, searchResults } = useContext(Context);
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    sort: "name",
    isIndoor: false,
    isCovidOpen: true,
    state: "America"
  });
  
  const renderStateName = () => {
    let filteredCourts = courts.filter(c => c.address.includes(search));
    setSearchResults(filteredCourts);
  }

  useEffect(() => {
    renderStateName();
    setTimeout(() => {
      setLoading(false);
      renderStateName();
    }, 1000);
    return () => {
      console.log("Clean up");
    }
  }, [loading])

  useEffect(() => {
    console.log("searchResults Changed!")
    if(searchResults.length > 0) {
      setFilters({...filters, state: searchResults[0].address.split(", ")[2]});
    }
  }, [searchResults])

  return(
    <>
    <h1>Hello World</h1>
      <div className="row">
        <div className="column-1">
          <div className="left-column">
            <h1>Courts in {filters.state}</h1>
            
          </div>
        </div>
        <div className="column-3">
          <div className="right-column">
            {loading ? <h1>No Courts Found</h1> : <h1> {searchResults.length} </h1>}
          </div>
        </div>
      </div>
    </>
  )
}