import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setings";
function App() {
  return (
 <Router>
      <div className="App">   
      
        <Header />
        <Navbar />
        <main className="main">
         <Routes>
            <Route  path="/profile"  element={<Profile/>}/>
            <Route path="/dialogs"  element={<Dialogs/>}/>
            <Route path="/news"  element={<News/>}/>
            <Route path="/music"  element={<Music/>}/>
            <Route path="/settings"  element={<Settings/>}/>
         </Routes>
        </main>
     
      </div>
      </Router>
  );
}

export default App;
