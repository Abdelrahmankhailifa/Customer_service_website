import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import SideNavPage from "./Components/SideNavBar";
import LiveChat from "./Pages/liveChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sidenav" element={<SideNavPage />} />
        <Route path="/livechat" element={<LiveChat />} />
        <Route path="/" element={<LoginPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
