import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components";
import { Survey, Signup, Login, SurveyList, NotFound } from "./pages";

function App() {
  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Survey />} />
        <Route exact path="/admin-signup" element={<Signup />} />
        <Route exact path="/admin-login" element={<Login />} />
        <Route exact path="/view-all" element={<SurveyList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
