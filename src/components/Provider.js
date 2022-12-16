import React, { useState } from "react";

export const Context = React.createContext();
export default function Provider() {
  const [name, setName] = useState("Filip");

  return (
    <Context.Provider
      value={{
        name,
        setName,
      }}
    ></Context.Provider>
  );
}
