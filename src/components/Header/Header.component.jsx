import React from 'react';



import  Logo   from '../../assets/images/conquer-logo-1.png';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';

 const Header = () => (
  <HeaderContainer>
     <LogoContainer to='/'>
      <img src={Logo} alt='Conquer Madness Logo' style={{height:'175px', width:'175px', margin:'20px'}} className='logo' />
    </LogoContainer>
    <OptionsContainer>
    <OptionLink to='/escape-rooms'>Escape Rooms</OptionLink>
    <OptionLink to='/birthday-parties'>Birthday Parties</OptionLink>
    <OptionLink to='/corporate-events'>Corporate Events</OptionLink>
    <OptionLink to='/faq'>FAQs</OptionLink>
    <OptionLink to='/hours'>Hours</OptionLink>
    <OptionLink to='/gallery'>Gallery</OptionLink>
    <a href='https://airmadnesspos.com/airmadness/onlinewaiver/waiver.php'>Waiver</a>
    <OptionLink to='/reviews'>Reviews</OptionLink>
    <OptionLink to='/contact'>Contact</OptionLink>





</OptionsContainer>
  </HeaderContainer>
);
export default Header;