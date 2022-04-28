import React from 'react';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import EscapeRoomsCarousel from '../components/EscapeRoomsCarousel/Carousel.component';
import { sectionOne, sectionTwo, sectionThree, sectionFour } from '../data/ContetData';
import ReviewsCarousel from '../components/ReviewsCarousel/Carousel.component';
// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Content {...sectionOne} />
			<Content  {...sectionTwo} />
			<EscapeRoomsCarousel />
			<Content {...sectionThree} />
			<ReviewsCarousel />
			<Content {...sectionFour} />



		</>
	);
};

export default Home;