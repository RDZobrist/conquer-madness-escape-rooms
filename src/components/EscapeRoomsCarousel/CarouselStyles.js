import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
export const CarouselImage = styled.img`
margin-top: 2vh;
opacity: 0.77;
max-width: 225px;
max-height: 225px;
-webkit-transform: scale(1.15);
-ms-transform: scale(1.15);
transform: scale(1.15);
-webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
transition: transform 0.5s, opacity 0.5s;
&:hover{
	opacity: 1;
	-webkit-transform: scale(2.03);
	-ms-transform: scale(2.03);
	transform: scale(1.09);
}
`;


export const ImageWrapper = styled.div`
	width: 33vw;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	height: 120vh;
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;


	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const EscapeRoomsSlider = styled(Slider)`
	width: 100%;
	height: 100%;

	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.button`
	background-color: #1d609c;
	font-size: 1.3rem;
	padding: 5px 10px;
	color: #fff;
	cursor: pointer;
	width: 112.5%;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;

	&:hover {
		background-color: #fff;
		color: indianred;
		transition: background-color 0.25s ease-in;

	}
`;

export const CarouselButton = styled(motion.button)`
background-color: #fff;
font-size: 1.3rem;
padding: 5px 10px;
color: #1d609c;
cursor: pointer;
width: 100%;
font-weight: 600;
margin-left: 25%;;
border: 5px;
border-color: #1d609c;
border-radius: 10px;

&:hover {
	background-color: #1d609c;
	transition: background-color 0.2s ease;
	color: ${({ inverse }) => (inverse ? 'white' : 'black')};
}
@media screen and (min-width: 1350px) {
	display; flex;
	min-width: 250px;
	margin-left: 15.75vw;

}
@media screen and (max-width: 400px) {
max-width: 300px;
margin: auto;
}
`;

export const CarouselStatsContainer = styled.div`
display: inline-block;
padding: 10px;
margin-bottom: 10px;
`;
