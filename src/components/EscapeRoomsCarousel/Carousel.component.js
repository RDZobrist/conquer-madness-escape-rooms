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
	CarouselStatsContainer,
} from './CarouselStyles';

const EscapeRoomsCarousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	let browserHistory = useHistory();

	const handleCarouselClick = () => {
		browserHistory.push('/gallery', { from_escape_carousel: true })
	}
	return (
		<Section id='escape-rooms' margin="auto" minHeight="150vh" maxWidth="1280px" maxHeight="275vh" padding="20px" inverse>
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
						<CarouselImage style={{margin: 10}} src={`./assets/${room.images[index]}`} />
						<TextWrapper size="1.2rem" margin="0.5rem" weight="bold">
							{room.title}
						</TextWrapper>
						<TextWrapper size="0.88rem" margin="0.5rem" color="#4f4f4f">
							{room.subTitle}
						</TextWrapper>
						<TextWrapper size="0.88rem" margin="0.5rem" color="#4f4f4f">
							{room.description}
						</TextWrapper>
						<CarouselStatsContainer>
							<TextWrapper size="0.88rem" margin="0.5rem" color="#4f4f4f">
								Difficulty:
							</TextWrapper>
							<Progress_bar bgcolor='indianred' progress={room.difficulty} height={5} />
						</CarouselStatsContainer>
						<CarouselStatsContainer>
							<TextWrapper size="0.88rem" margin="0.5rem" color="#4f4f4f">
								Physical:
							</TextWrapper>
							<Progress_bar bgcolor='indianred' progress={room.physical} height={5} />
						</CarouselStatsContainer>
						<CarouselStatsContainer>
							<TextWrapper size="0.88rem" margin="0.5rem" color="#4f4f4f">
								Escape Rate:
							</TextWrapper>
							<Progress_bar bgcolor='indianred' progress={room.escape_rate} height={5} />
						</CarouselStatsContainer>

						<CardButton onClick={handleCarouselClick}>View Gallery</CardButton>
					</ImageWrapper>
				))
				}
			</EscapeRoomsSlider >
		</Section >
	);
};

export default EscapeRoomsCarousel;
