import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Import Components & Screens
import Header from "./components/Header"; // Import Header
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const Layout = ({ children }) => {
  const location = useLocation(); // Get current route

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Header ONLY on Home Page */}
      {location.pathname === "/home" && <Header />}
      
      {/* Main Content */}
      <main className="flex-grow">{children}</main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
