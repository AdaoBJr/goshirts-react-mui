import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateAccount } from './lib/pages/CreateAccount';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Home</p>} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<CreateAccount />} />
    </Routes>
  );
};

export default Router;
