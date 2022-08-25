import React from 'react';
import { ThemeProvider, Button } from '@lokalise/louis';

const App = () => {
  return (
    <ThemeProvider activeTheme="base">
      <Button>123</Button>
    </ThemeProvider>
  );
};

export default App;
