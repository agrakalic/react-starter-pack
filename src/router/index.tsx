import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteComponent from './RouteComponent';
import { pages } from '../config';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map((page) => (
          <Route path={page.path} key={page.id} element={<RouteComponent page={page} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
