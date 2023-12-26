import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("token");
      } else {
        setUser(decodedToken);
      }
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch("yourServerUrl/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setUser(jwtDecode(data.token));
      } else {
        // Handle login failure
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  const register = async (username, password) => {
    try {
      const response = await fetch("yourServerUrl/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Optionally, you may handle the successful registration
      } else {
        // Handle registration failure
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
