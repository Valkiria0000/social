import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setings";
import Footer from "./components/Footer/Footer";
function App(props) {

  return (
 <Router>
      <div className="App">   
      
        <Header />
        <Navbar />
        <main className="main">
         <Routes>
            <Route  path="/profile" element={<Profile posts = {props.posts}/>}/>
            <Route path="/dialogs" element={<Dialogs dialogs = {props.dialogs} messages={props.messages}/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
         </Routes>
        </main>
     <Footer/>
      </div>
      </Router>
  );
}

export default App;
