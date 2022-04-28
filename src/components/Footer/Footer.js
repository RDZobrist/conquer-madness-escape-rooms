import React from 'react';
import {
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
	FooterHours
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

function Footer() {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<Section padding="1rem 0 1rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<Row align="center" gap="1rem">
							<FooterAddress>
								310 Industrial Drive<br />
								Suite A<br />
								Harrisburg, SD 57032
							</FooterAddress>
							<FooterLogo to="/" >
								<SocialIcon src="./assets/conquer-logo-1.png" />

								Conquer Escape Rooms
							</FooterLogo>
							<FooterHours>
								Monday - Thursday:&emsp;Call For Appointments<br/>
								Friday:&emsp;12:00 pm -11:00 pm<br/>
								Saturday:&emsp;10:00 am -11:00 pm<br/>
								Sunday:&emsp;1:00 pm -7:00 pm
							</FooterHours>


						</Row>
						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index, url) => (
								<FooterSocialIcon
									key={index}
									href={url}
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>


				</FooterGrid>

				<FooterRights><a href='https://nltsf.com/'>Next Level Technology SF & Conquer Escape Rooms © 2022</a></FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
