import "./App.css";
import { Login, Signup } from "./components";
import {Bookmark, Home, Landing, UserProfile} from "./pages";


function App() {
  return (
    <div className="App">
      {/* <Landing /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <Home />
      <UserProfile />
    <Bookmark />
    </div>
  );
}

export default App;
