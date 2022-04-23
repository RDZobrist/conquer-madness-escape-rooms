import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import { YouTubeVideo } from '../../components/YouTubeiFrame/YouTubeiFrame.component';
import { HomePageContainer, TitleContainer, miniTitleContainer } from './HomePage.styles';


const HomePageScreen = () => {

    return (
        <HomePageContainer>
            <TitleContainer>Conquer Madness</TitleContainer>
            <TitleContainer>SOUTH DAKOTA'S PREMIER ESCAPE ROOMS</TitleContainer>
        </HomePageContainer>
    );
};

export default HomePageScreen;