import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  NavbarAnchorLink,
  NavbarAnchorLinkExtended,
  YouTubeContainer
} from "./NavBar.styles";
import LogoImg from "../../assets/images/conquer-logo-1.png";
import { YouTubeVideo } from "../YouTubeiFrame/YouTubeiFrame.component";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const [bookNowURL] = useState('https://airmadnesspos.com/airmadness/onlinesales1/tickets1.php');

  const handleBookNowClick = () => {
    window.location = bookNowURL;
    return null;
  };

  const handlePhoneNumberClick = () => {
    window.location = "tel:+1-605-702-4243";
    return null;
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      
      <NavbarInnerContainer>
        <LeftContainer>
        <a href='/'><Logo src={LogoImg}></Logo></a>
        </LeftContainer>
        
        <RightContainer>
        <NavbarLinkContainer>
          <NavbarLink to='/escape-rooms'>Escape Rooms</NavbarLink>
        <NavbarLink to='/special-events'>Special Events</NavbarLink>
        <NavbarLink to='/birthday-parties'>Birthday Parties</NavbarLink>
        <NavbarLink to='/corporate-events'>Corporate Events</NavbarLink>
        <NavbarLink to='/faq'>FAQs</NavbarLink>
        <NavbarLink to='/hours'>Hours</NavbarLink>
        <NavbarLink to='/gallery'>Gallery</NavbarLink>
        <NavbarAnchorLink href='https://airmadnesspos.com/airmadness/onlinewaiver/waiver.php'>Waiver</NavbarAnchorLink>
        <NavbarLink to='/reviews'>Reviews</NavbarLink>
        <NavbarLink to='/contact'>Contact</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>

          </NavbarLinkContainer>

        </RightContainer>
     
      

      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/escape-rooms">Escape Rooms</NavbarLinkExtended>
          <NavbarLinkExtended to="/special-events">Special Events</NavbarLinkExtended>
          <NavbarLinkExtended to="/birthday-parties">Birthday Parties</NavbarLinkExtended>
          <NavbarLinkExtended to="/corporate-events">Corporate Events</NavbarLinkExtended>
          <NavbarLinkExtended to="/faq">FAQs</NavbarLinkExtended>
          <NavbarLinkExtended to="/hours">Hours</NavbarLinkExtended>
          <NavbarLinkExtended to="/gallery">Gallery</NavbarLinkExtended>
          <NavbarAnchorLinkExtended href='https://airmadnesspos.com/airmadness/onlinewaiver/waiver.php'>Waiver</NavbarAnchorLinkExtended>
          <NavbarLinkExtended to="/reviews">Reviews</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Let's Connect</NavbarLinkExtended>



        </NavbarExtendedContainer>
        
      )}
  
        <YouTubeContainer>
          <YouTubeVideo />
        </YouTubeContainer>

        <div style={{boxSizing: 'border-box' }}>

<CustomButton style={{display:'inline-block',fontSize: '.82rem',width: '17vw', backgroundColor: 'red', color:'#ffffff',fontWeight: 'bolder', opacity: '.92', marginTop: '.026vh', marginLeft: '30.33vw'}} onClick={handleBookNowClick} >Book Now</CustomButton>
<CustomButton style={{display:'inline-block',fontSize: '.82rem',width: '17vw', backgroundColor: 'red', color:'#ffffff',fontWeight: 'bolder', opacity: '.92', marginTop: '.026vh', marginLeft: '1.5vw'}} onClick={handlePhoneNumberClick}>(605) 702-4243</CustomButton>

</div>

    </NavbarContainer>
  );
};

export default Navbar;
