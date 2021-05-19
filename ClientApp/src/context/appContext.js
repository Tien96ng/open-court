import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({children}) {
  const [courts, setCourts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("WA");
  const [searchResults, setSearchResults] = useState([]);

  const fetchCourts = async() => {
    const response = await fetch(process.env.REACT_APP_SERVER_ENDPOINT);
    const data = await response.json();
    setCourts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchCourts();
  }, [])

  return(
    <Context.Provider value={{
      courts,
      setCourts,
      loading,
      fetchCourts,
      user,
      setUser,
      search,
      setSearch,
      searchResults,
      setSearchResults
    }}>
      {children}
    </Context.Provider>
  )
};



export { ContextProvider, Context };