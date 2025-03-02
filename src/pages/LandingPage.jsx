import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-600">
        <h1 className="text-5xl font-bold mb-4">Welcome to Oasis Study Platform</h1>
        <p className="text-lg mb-8">Your ultimate companion for efficient learning and productivity.</p>
        <Link to="/dashboard" className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
              <p>Track your study progress and manage tasks efficiently.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI Tools</h3>
              <p>Leverage AI to enhance your learning experience.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Calendar</h3>
              <p>Organize your schedule and never miss a deadline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>"Oasis has transformed the way I study. The AI tools are a game-changer!"</p>
              <p className="mt-4 text-right">- Jane Doe</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>"The dashboard helps me keep track of my tasks and stay organized."</p>
              <p className="mt-4 text-right">- John Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
          <Link to="/dashboard" className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200">
            Join Now
          </Link>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Already have an account?</h2>
          <Link to="/login" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400">
            Login
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 