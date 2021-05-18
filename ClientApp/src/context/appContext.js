import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({children}) {
  const [courts, setCourts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

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
      setUser
    }}>
      {children}
    </Context.Provider>
  )
};



export { ContextProvider, Context };