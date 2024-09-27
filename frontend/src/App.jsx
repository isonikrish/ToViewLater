// src/App.jsx

import React from 'react';
import LinkProvider from './context/LinkContext';
import Popup from './components/Popup';

const App = () => {
  return (
    <LinkProvider>
      <Popup />
    </LinkProvider>
  );
};

export default App;
