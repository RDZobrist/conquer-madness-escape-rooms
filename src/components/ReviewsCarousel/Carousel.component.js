import React, { useState, useEffect } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { reviews_data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper  } from '../../globalStyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CarouselButton,
} from './CarouselStyles';


const ReviewsCarousel = ({ primary, inverse }) => {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
	const [sliderRef, setSliderRef] = useState(null);
	const [tripAdvisorReviewsURL] = useState('https://www.tripadvisor.com/Attraction_Review-g54631-d15353746-Reviews-Conquer_Escape_Rooms-Harrisburg_South_Dakota.html');

  const handleTripAdvisorReviewsClick = () => {
    window.location = tripAdvisorReviewsURL;
    return null;
  };

	return (
		<Section ref={ref} margin="auto"  maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading id='reviews' width="auto" inverse style={{color: '#000000'}}>
					Reviews  <TextWrapper size=".95rem" style={{color: 'black', fontWeight: 600}}>(5.0) Overall Rating (109 reviews)</TextWrapper>
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{reviews_data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.date_of_review}
						</TextWrapper>
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}:
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
					
						{el.respones_from_business?	<><TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
						Conquer Escape Rooms:
						</TextWrapper><TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.respones_from_business}
						</TextWrapper></>:null}

					</ImageWrapper>

				))}
			</ReviewSlider>
						<CarouselButton
							initial={initial}
							transition={{ delay: 1, duration: 0.6 }}
							animate={animation}
							inverse
							primary={primary}
								onClick={handleTripAdvisorReviewsClick}
								style={{width:'auto'}}
							>
								Read Our Trip Advisor Reviews
							</CarouselButton>

		</Section>
	);
};

export default ReviewsCarousel;