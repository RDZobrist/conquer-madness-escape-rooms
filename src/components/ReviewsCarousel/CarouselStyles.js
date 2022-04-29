import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
export const CarouselImage = styled.img`
	width: 300px;
	height: 100px;
	object-fit: cover;
	vertical-align: middle;
`;


export const ImageWrapper = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	height: 430px;

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

export const ReviewSlider = styled(Slider)`
	width: 100%;

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
	width: 100%;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;

	&:hover {
		background-color: #112f4a;
		transition: background-color 0.2s ease-in;
	}
`;

export const CarouselButton = styled(motion.button)`
background-color: #fff;
font-size: 1.3rem;
padding: 5px 10px;
color: #1d609c;
cursor: pointer;
width: 12.5vw;
font-weight: 600;
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
	min-width: 12.5vw;
	margin: auto 26.75vw;
	align-self: center;
}
@media screen and (max-width: 400px) {
max-width: 300px;
margin: auto;
}
`;
