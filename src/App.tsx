import React from 'react';
import Layout from './components/Layout';
import { ThemeModeProvider } from './context/themeContext';


const App: React.FC = () => {
  return (
    <ThemeModeProvider>
      <Layout />
    </ThemeModeProvider>
  );
};

export default App;
