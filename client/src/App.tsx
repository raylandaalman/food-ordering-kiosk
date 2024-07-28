import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './routes/home/home.component';

const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
