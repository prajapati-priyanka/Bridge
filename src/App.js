import {Routes, Route } from "react-router-dom";
import "./App.css";
import {Bookmark, Home, Landing, UserProfile,Login, Signup, Explore, Error404 } from "./pages";
import { RequiresAuth } from "./Router/RequiresAuth";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<RequiresAuth><Home /></RequiresAuth>} />
        <Route path="/profile/:username" element={<RequiresAuth><UserProfile /></RequiresAuth>} />
        <Route path="/bookmark" element={<RequiresAuth><Bookmark /></RequiresAuth>} />
        <Route path="/explore" element={<RequiresAuth><Explore /></RequiresAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    
    </div>
  );
}

export default App;
