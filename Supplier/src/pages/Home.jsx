import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col ml-48 items-center justify-center h-screen bg-gradient-to-r from-gray-950 to-blue-600">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome, Supplier!</h1>
      <p className="text-lg text-white mb-8">You are now logged in as a supplier. Access your account and manage your products.</p>
      <div className="flex">
        <Link to="/report" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center">
          <FaSignOutAlt className="mr-2" /> About Us
        </Link>
      </div>
    </div>
  );
}
