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
        <Navbar menu={props.state.navbar.menu} />
        <main className="main">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.state.profile}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  usersDialogs={props.state.dialogs.usersDialogs}
                  messages={props.state.dialogs.messages}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
