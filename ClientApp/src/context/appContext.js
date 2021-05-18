import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({children}) {
  const [courts, setCourts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourts = async() => {
    const response = await fetch('api/courts');
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
      loading
    }}>
      {children}
    </Context.Provider>
  )
};



export { ContextProvider, Context };