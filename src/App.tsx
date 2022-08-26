import React from 'react';
import {ThemeProvider, ToastContainer} from '@lokalise/louis'
import Home from './pages/Home'
import Header from './components/Header'
import {Wrapper, Container} from './styles'

const App = () => {
  return (
    <ThemeProvider activeTheme="base">
      <Wrapper>
        <Header />
        <Container>
          <Home />
        </Container>
      </Wrapper>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
