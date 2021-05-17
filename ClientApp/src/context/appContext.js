import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({children}) {
  return(
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
};

export default ContextProvider;