import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeaderSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	margin-bottom: 10vh;
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	@media screen and (max-width: 400px) {
		max-width: 400px;
		margin-bottom: 10vh;
	}
`;

export const HeaderVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
	@media screen and (max-width: 400px) {
		max-width: 400px;
	}
`;

export const HeaderText = styled.p`
	margin-top: 44vh;
	margin-bottom: 35px;
	font-size: 2.80em;
	line-height: 52px;
	text-align: center;
	letter-spacing: 2.7px;
	color: #fff;
	@media screen and (max-width: 400px) {
		font-size: 22px;
		margin-top: 25vh;
		margin-bottom: 35px;
		font-size: 1.50em;
		line-height: 26px;
		text-align: center;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeaderButton = styled(Button)`
	color: black;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;
