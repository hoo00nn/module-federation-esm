import React from 'react';
import { createRoot } from 'react-dom/client';

import StyleContext from 'isomorphic-style-loader/StyleContext';
import Banner from './components/Banner';

const insertCss = (...styles: any[]) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

const App = () => {
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Banner />
    </StyleContext.Provider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
