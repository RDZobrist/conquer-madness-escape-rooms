import React from 'react';
import { IFrameContainer } from './YouTubeiFrame.styles';


export const YouTubeVideo = () => {
    return (
        <IFrameContainer>
            <iframe
                width="100%"
                height="90%"
                src={`https://www.youtube.com/embed/J2TzOmlSJls?autoplay=1&playlist=J2TzOmlSJls&loop=1&mute=1&disablekb=0&controls=0`}
                frameBorder="0"
                allowFullScreen
                title="Embedded Conquer Madness YT Video"
            />
        </IFrameContainer>)
};