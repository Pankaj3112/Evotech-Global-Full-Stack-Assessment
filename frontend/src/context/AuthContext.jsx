import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import axios from "axios";

const AuthContext = createContext();
const serverUrl = import.meta.env.VITE_SERVER_URL;

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
	  const { data } = await axios.post(`${serverUrl}/admin/login`, {
		username,
		password,
	  });

	  if(data.success){
		localStorage.setItem("token", data.token);
		setUser(jwtDecode(data.token));
		toast.success("Logged in successfully");
	  }else{
		toast.error("Login failed");
	  }
	} catch (err) {
	  toast.error(err.response.data.message);
	}
  };

  const register = async (username, password) => {
    try {
      const { data } = await axios.post(`${serverUrl}/admin/signup`, {
        username,
        password,
      });

      if(data.success){
		toast.success("Registered successfully");
	  }else{
		toast.error("Registration failed");
	  }

    } catch (err) {
	  toast.error(err.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
	toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
