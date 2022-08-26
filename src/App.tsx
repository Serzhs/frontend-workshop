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
          {/*passing "title" tp Home page, pages can be called components as well*/}
          <Home title="Home page" />
        </Container>
      </Wrapper>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
