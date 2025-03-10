// src/screens/HomeScreen.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to EchoGuard</h1>
          <p className="mt-4 text-center text-gray-600">Your safety is our priority. Stay protected with EchoGuard.</p>
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
              Trigger Emergency Alert
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomeScreen;
