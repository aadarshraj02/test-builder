import React, { createContext, useState } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [testData, setTestData] = useState({
    questions: [],
    categories: [{ id: "cat-1", value: "" }],
    items: [{ id: "item-1", value: "", category: "" }],
  });

  return (
    <TestContext.Provider value={{ testData, setTestData }}>
      {children}
    </TestContext.Provider>
  );
};
