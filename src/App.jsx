import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from "./Layout";
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
