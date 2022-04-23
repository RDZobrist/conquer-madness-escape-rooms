import React from 'react';
import { HomePageContainer, TitleContainer } from './HomePage.styles';
import Typography from '../../components/Typograpgy/Typography.component';


const HomePageScreen = () => {

    return (
        <HomePageContainer>
            <TitleContainer>Conquer Madness</TitleContainer>
            <TitleContainer style={ {marginLeft: '33vw'}}>SOUTH DAKOTA'S PREMIER ESCAPE ROOMS</TitleContainer>
            <Typography fWrap width={'50vw'} ml={100} size={23} textAlign={'center'} fontWeight={400}>
                Hollywood Quality Set Designs & Special Effects
            </Typography>
            <Typography fWrap width={'50vw'} ml={200}>
WE'RE BACK & OPEN FOR BUSINESS
Enjoy Clean & Private Escape Room Experiences</Typography>
        </HomePageContainer>
    );
};

export default HomePageScreen;