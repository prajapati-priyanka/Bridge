import {Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, Signup } from "./components";
import {Bookmark, Home, Landing, UserProfile} from "./pages";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
    </div>
  );
}

export default App;
