import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../globalStyles';

export const FooterContainer = styled.div`
	background-color: #101522;
	padding: 4rem 0 2rem 0;
`;

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;
`;

export const FooterSubHeading = styled.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	@media screen and (max-width: 820px) {
		> div {
			width: 20%;
		}

		> div:first-child {
			width: 100%;
		}
	}

	@media screen and (max-width: 420px) {
		flex-direction: column;
		align-items: center;

		* {
			width: 100%;
			text-align: center;
		}
	}
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
`;

export const FooterColumn = styled(Column)`
	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: indianred;
		transition: 0.333s ease-out;
	}
`;

export const FooterLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.285rem;
	align-items: center;
	margin-bottom: 12px;
	display: flex;
	flex: 33%;

`;

export const SocialIcon = styled.img`
	margin-right: 10px;
	width: 40px;
	
`;

export const FooterRights = styled.div`
	color: #fff;
	margin-bottom: 16px;
	width: 100%;
	font-size: 0.8rem;
	text-align: center;
	border-top: 1px solid #2d3748;
	padding: 1rem 0;
	margin: 1rem 0 0;
	@media screen and (max-width: 400px) {
		margin-left: 12vw;
		margin-right: 12vw;
		max-width: 75vw;



	}
`;

export const FooterSocialIcon = styled.a`
	color: #fff;
	font-size: 24px;
	margin: 10 0 0 10;
	//  margin-left: 8rem;
	//   display: block;
	//    width: 100vw;


	&:hover {
		color: indianred;
		transition: 0.333s ease-out;
	}
	@media screen and (max-width: 400px) {
		margin: 0 10 0 10;;
		width: 12.5vw;
	}
`;

export const FooterAddress = styled.div`
	color: white;
	margin: 0.4rem auto 0.4rem;
	max-width: 20rem;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 2;
	text-align: center;
	display: flex;
	flex: 33%;
	@media screen and (min-width: 1000px) {
		margin-left: 0px;
		text-align: left;
		margin-right: 1rem;
	}
	@media screen and (max-width: 400px) {
		margin-left: 25px;
		font-weight: 300;
		font-size: .7375rem;
		line-height: 1.65;


	}
`;

export const FooterHours = styled.div`
display: flex;
flex: 33%;
font-size: 1.0825rem;
color: #ffffff;
margin-right: 2vw;
@media screen and (max-width: 400px) {
	margin-right: 25px;
	font-weight: 300;
	font-size: .7375rem;
	line-height: 1.65;


}
`;
