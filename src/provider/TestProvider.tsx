import React, { useState } from "react";

//create init state w/ empty object
export const TestContext = React.createContext({});
//create handler that can edit state w/ user input

//initial state
const TestProviders = ({ children }: any) => {
  const [test, setTest] = useState({});

  //handler for all states with  k-v's that are added/updated
  const testHandler = (altKey: string, altValue: any) => {
    console.log(altKey, altValue);
    setTest({ ...test, [altKey]: altValue });
  };

  return (
    <TestContext.Provider
      value={{
        test,
        testHandler,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestProviders;