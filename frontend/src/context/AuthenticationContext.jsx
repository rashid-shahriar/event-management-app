import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create the authentication context
export const AuthenticationContext = createContext();

// Create the authentication provider component
export const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = () => {
    // Perform login logic here
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const logout = () => {
    // Perform logout logic here
    setIsAuthenticated(false);
  };

  // Value object to be provided by the context
  const authContextValue = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthenticationContext.Provider value={authContextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
