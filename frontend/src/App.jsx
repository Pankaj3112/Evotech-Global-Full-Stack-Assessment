import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar, RedirectHome, RedirectLogin } from "./components";
import { Survey, Signup, Login, SurveyList, NotFound } from "./pages";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Survey />} />
        <Route
          exact
          path="/admin-signup"
          element={
            <RedirectHome isSignedIn={user}>
              <Signup />
            </RedirectHome>
          }
        />
        <Route
          exact
          path="/admin-login"
          element={
            <RedirectHome isSignedIn={user}>
              <Login />
            </RedirectHome>
          }
        />
        <Route
          exact
          path="/view-all"
          element={
            <RedirectLogin isSignedIn={user}>
              <SurveyList />
            </RedirectLogin>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
