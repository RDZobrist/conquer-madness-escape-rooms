import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import { HomePageContainer, TitleContainer } from './HomePage.styles';


const HomePageScreen = () => {

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
        <HomePageContainer>
        <h1 style={{width: '150%'}}>coming soon
        </h1>
        <CustomButton onClick={handleClick} style={{backgroundColor: 'red'}}>Book Now</CustomButton>
        <CustomButton onClick={handlePhoneNumberClick} style={{backgroundColor: 'red'}}>(605)-702-4243</CustomButton>
        </HomePageContainer>
    );
};

export default HomePageScreen;