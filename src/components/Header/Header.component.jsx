import React, { useState } from 'react';

import CustomButton from '../CustomButton/CustomButton.component';

import Logo from '../../assets/images/conquer-logo-1.png';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';

const Header = () => {


  const [bookNowURL] = useState('https://airmadnesspos.com/airmadness/onlinesales1/tickets1.php');

  const handleClick = () => {
    window.location = bookNowURL;
    return null;
  };

  const handlePhoneNumberClick = () => {
    window.location = "tel:+1-605-702-4243";
    return null;
  };
  return (
    <HeaderContainer>
      <OptionsContainer>
        <OptionLink to='/escape-rooms'>Escape Rooms</OptionLink>
        <OptionLink to='/special-events'>Special Events</OptionLink>
        <OptionLink to='/birthday-parties'>Birthday Parties</OptionLink>
        <OptionLink to='/corporate-events'>Corporate Events</OptionLink>
        <OptionLink to='/faq'>FAQs</OptionLink>
        <OptionLink to='/hours'>Hours</OptionLink>
        <OptionLink to='/gallery'>Gallery</OptionLink>
        <a style={{color: '#fff'}} href='https://airmadnesspos.com/airmadness/onlinewaiver/waiver.php'>Waiver</a>
        <OptionLink to='/reviews'>Reviews</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
      </OptionsContainer>
      <LogoContainer to='/'>
        <img src={Logo} alt='Conquer Madness Logo' style={{ height: '175px', width: '175px', margin: '20px' }} className='logo' />
      </LogoContainer>
      <CustomButton onClick={handleClick} style={{backgroundColor: '#EC6A38', color:'#fff'}}>Book Now</CustomButton>
        <CustomButton onClick={handlePhoneNumberClick} style={{backgroundColor: '#EC6A38', color: '#fff', fontSize:'180%'}}>(605)-702-4243</CustomButton>
    </HeaderContainer>
  )
}
  ;
export default Header;