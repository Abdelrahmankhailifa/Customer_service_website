import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import SideNavBar from "./Components/SideNavBar";
import LiveChat from "./Pages/liveChat";
import UserInfo from "./Pages/userInfo"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sidenav" element={<SideNavBar />} />
        <Route path="/livechat" element={<LiveChat />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/" element={<LoginPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
