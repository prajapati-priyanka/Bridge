import {Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, Signup } from "./components";
import {Bookmark, Home, Landing, UserProfile} from "./pages";
import { RequiresAuth } from "./Router/RequiresAuth";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<RequiresAuth><Home /></RequiresAuth>} />
        <Route path="/profile" element={<RequiresAuth><UserProfile /></RequiresAuth>} />
        <Route path="/bookmark" element={<RequiresAuth><Bookmark /></RequiresAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
    </div>
  );
}

export default App;
