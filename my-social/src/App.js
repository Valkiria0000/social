import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
function App() {
  return (
 <Router>
      <div className="App">   
      
        <Header />
        <Navbar />
        <main className="main">
         <Routes>
            <Route path="/profile"  element={<Profile/>}/>
            <Route path="/dialogs"  element={<Dialogs/>}/>
         </Routes>
        </main>
     
      </div>
      </Router>
  );
}

export default App;
