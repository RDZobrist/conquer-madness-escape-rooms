import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useHistory } from "react-router-dom";
import { escape_rooms_data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import Progress_bar from '../ProgressBar/ProgressBar.component';
import {
	ButtonContainer,
	EscapeRoomsSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';

const EscapeRoomsCarousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	let browserHistory = useHistory();

	const handleCarouselClick = () => {
		browserHistory.push('/gallery', {from_escape_carousel:true})
	}
	return (
		<Section id='escape-rooms' margin="auto" style={{ height: 'auto' }} maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" style={{ marginLeft: 20 }} inverse>
					Escape Rooms
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<EscapeRoomsSlider {...sliderSettings} ref={setSliderRef}>
				{escape_rooms_data.map((room, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={`./assets/${room.images[index]}`} />
						<TextWrapper size="1.28rem" margin="0.6rem 1.22rem" weight="bold">
							{room.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{room.subTitle}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{room.description}
						</TextWrapper>
					<Progress_bar bgcolor='indianred' progress={room.difficulty} height={50}/>

						<CardButton onClick={handleCarouselClick}>View Gallery</CardButton>
					</ImageWrapper>
				))}
			</EscapeRoomsSlider>
		</Section>
	);
};

export default EscapeRoomsCarousel;
