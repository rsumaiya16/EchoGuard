import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const userName = location.state?.name || "User"; 

  return (
    <div className="flex flex-col min-h-screen">
   
      {location.pathname !== "/" && <Header userName={userName} />}
      <main className="flex-grow">{children}</main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
