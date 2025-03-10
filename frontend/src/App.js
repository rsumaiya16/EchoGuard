// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Screens (Pages)
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import EmergencyScreen from './screens/EmergencyScreen';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header is present on every page */}
        <Header />

        {/* Routes for different pages */}
        <main className="flex-grow bg-gray-100">
          <Routes>
            {/* Route for Home Screen */}
            <Route path="/home" element={<HomeScreen />} />
            
            {/* Route for Login Screen */}
            <Route path="/login" element={<LoginScreen />} />
            
            {/* Route for Emergency Screen */}
            <Route path="/emergency" element={<EmergencyScreen />} />

            {/* Default route (Home) */}
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>

        {/* Footer is present on every page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
