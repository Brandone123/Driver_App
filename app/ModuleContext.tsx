import React, { useState } from 'react';

const ModuleContext = React.createContext({
  selectedModule: null,
  setSelectedModule: () => {},
});

export const ModuleProvider = ({ children }) => {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <ModuleContext.Provider value={{ selectedModule, setSelectedModule }}>
      {children}
    </ModuleContext.Provider>
  );
};

export default ModuleContext;