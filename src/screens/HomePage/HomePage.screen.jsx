import React from 'react';
import { HomePageContainer, TitleContainer } from './HomePage.styles';
import Typography from '../../components/Typograpgy/Typography.component';


const HomePageScreen = () => {

    return (
        <HomePageContainer>
            <div style={{ marginRight: '25vw' }}>
                <Typography fontWeight={900} style={{ marginLeft: '28.5vw', marginBottom: '20px' }} size={55} textAlign={'center'} >
                    Conquer Madness</Typography>
                <Typography fontWeight={100} style={{ marginLeft: '28.5vw', marginBottom: '20px' }} size={29} textAlign={'center'} >
                    SOUTH DAKOTA'S PREMIER ESCAPE ROOMS</Typography>
                <Typography fontWeight={100} style={{ marginLeft: '28.5vw' }} size={29} textAlign={'center'} >
                    Hollywood-Quality Set Designs & Special Effects!<br />
                    WE'RE BACK & OPEN FOR BUSINESS!<br />
                    Enjoy Clean & Private Escape Room Experiences!<br />
                </Typography>
            </div>

        </HomePageContainer>
    );
};

export default HomePageScreen;