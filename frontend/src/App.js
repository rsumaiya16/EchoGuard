// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">  
      {/* ensures the height of this div takes up at least the entire height of the screen. */}
        {/* Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
