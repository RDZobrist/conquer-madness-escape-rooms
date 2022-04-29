import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container, Section } from '../../globalStyles';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './Content.styles.jsx';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const Content = ({
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	reverse,
	primary,
	inverse,
	elID, 
	hours,
	to
	
	
}) => {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();
	let history = useHistory();
	let location = useLocation();

	const { ref, inView } = useInView({ threshold: 0.2 });
	const  NewlineText= props => {
	  const text = props.text;
	  return <div style={{whiteSpace: 'pre-wrap'}}>{text}</div>;
	}
	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
	const scrollTo = elID => {
		
		const element = document.getElementById(elID);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	const verifyScrollOrReroute = (to, elID) => {
			
		if ((elID === 'book_now') && (location.pathname === '/'))  {
			history.push(to);

		}

		scrollTo(elID);
	};

	
	return (
		<Section inverse={inverse} ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							
							<TopLine
								initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
							>
								{topLine.text}
							</TopLine>
							
							<Heading
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{headline}
							</Heading>
							{hours===undefined?
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{description}
							</Subtitle>
							:
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
								style={{fontWeight: 900, fontSize: '125%'}}
							>
								<NewlineText text={description} />
							</Subtitle>
							}
							
						<ContentButton
							initial={initial}
							transition={{ delay: .777, duration: 0.666 }}
							animate={animation}
							inverse={inverse}
							primary={primary}
							onClick={()=>verifyScrollOrReroute(to, elID)}

						>{buttonLabel}
						</ContentButton>
					</TextWrapper>
				</ContentColumn>
				<ContentColumn
					initial={initial}
					transition={{ delay: 0.45, duration: 0.666 }}
					animate={animation}
				>
					<ImgWrapper>
						<Img
							src={img}
							alt={alt}
							width={'115%'}
							whileHover={{ rotate: 2.25, scale: 1.0555 }}
							transition={{ duration: .666 }}
						/>
					</ImgWrapper>
				</ContentColumn>
			</ContentRow>
		</Container>
		</Section >
	);
};
