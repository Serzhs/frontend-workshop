import React from 'react';
import logo from './assets/static/logo.png'
import {HeaderWrapper, Logo} from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Lokalise Frontend Workshop" width={250}/>
    </HeaderWrapper>
  );
};

export default Header;
