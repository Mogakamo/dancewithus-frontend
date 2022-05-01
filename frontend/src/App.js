import './App.css';
import { BrowserRouter as Router,  Route , Routes } from "react-router-dom";
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import Home from "./pages/home"
import Createpost from "./pages/createpost"
import Editprofile from "./pages/editprofile"
import Feed from "./pages/feed"
import Profile from "./pages/profile"
import Search from "./pages/search"

function App() {
  return (
    <div className="App">
      <Router>
      {/* <div> */}
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/createpost" element={<Createpost/>}/>
            <Route exact path="/signin" element={<Signin/>}/>
            <Route exact path="/editprofile" element={<Editprofile/>}/>
            <Route exact path="/feed" element={<Feed/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route exact path="/search" element={<Search/>}/>
         </Routes>
    {/* </div> */}
    </Router>
    </div>
  );
}

export default App;
