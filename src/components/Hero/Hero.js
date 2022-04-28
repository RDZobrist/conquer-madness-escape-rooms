import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
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
		<HeroSection>
			<HeroVideo src="./assets/conquerBEST.mp4" autoPlay muted loop />
			<Container>
				<HeroText>
					SOUTH DAKOTA'S PREMIER ESCAPE ROOMS<br/>
					Hollywood Quality Set Designs & Special Effects<br/>
				</HeroText>
				<ButtonWrapper>
					
					<HeroButton onClick={handlePhoneNumberClick}>(605) 702-4243</HeroButton>
					<Link to="signup">
						<Button onClick={handleBookNowClick}>Book an Escape Room Now</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
