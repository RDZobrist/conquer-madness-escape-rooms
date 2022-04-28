import styled from 'styled-components';


export const GalleryPhoto = styled.img`
opacity: 0.7;
min-width: 20vw;
min-height: 20vw;
max-width: 20vw;
max-height: 20vw;
margin-left: 25px;
margin-right: 25px;
margin-bottom: 20px;
margin-top: 25px;

-webkit-transform: scale(1.15);
-ms-transform: scale(1.15);
transform: scale(1.15);
-webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
transition: transform 0.5s, opacity 0.5s;
    &:hover{
        opacity: 1;
        -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
    }
`;