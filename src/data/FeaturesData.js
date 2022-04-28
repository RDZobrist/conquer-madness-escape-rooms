import React from 'react';
import {MdLocalMovies} from 'react-icons/md'
import {RiTeamFill} from 'react-icons/ri';
import {GiLovers, GiBalloons, GiReceiveMoney, GiHealthIncrease} from 'react-icons/gi'

const iconStyle = (Icon) => <Icon size="4rem" color="#c7694a" />;

export const featuresData1 = [
	{
		name: 'Wallet Friendy',
		description: "We have all seen the prices of gas and milk and everything else we need SOAR to the skies, but you can rest assured knowing one of the four Conquer Madness Escape Rooms you and your group may choose to attempt may SURELY conquer your brain as you attempt to solve the intense puzzle, but we promise it wont conquer wallet. Come join us today, and let's have some fun",
		icon: iconStyle(GiReceiveMoney),
		imgClass: 'one',
	},
	{
		name: `Hollywood Quality`,
		description: 'Live Actor Pre-shows, complete with Hollywood-Quality Special Effects and Industry Leading Puzzle Technology',
		icon: iconStyle(MdLocalMovies),
		imgClass: 'two',
	},
	
	{
		name: 'Safe, Clean Entertainment',
		description: 'Escape Your Home, All While Staying Safe. All Games are Private Experiences so that you and your team can gurantee healthy distancing from other parties during our current Covid climate. We Are Double-Disinfecting Between Games. Team Members Remain 6 Feet From Guests & Wear Face Masks At All Times. All Team Members Have Their Temperature Checked When They Report To Work. Hand Sanitizer Will Be Supplied For Team Members and Guests. Masks and Gloves Will Be Available (By Request For All Guests).',
		icon: iconStyle(GiHealthIncrease),
		imgClass: 'three',
	}
];
export const featuresData2 = [

	{
		name: 'Birthday Parties',
		description: 'Whether you are throwing a party for children or adults, you will make a lasting impression with our expertly and professionally designed games. The puzzles and clues may not take the place of a birthday cake but they are certainly more fun. We tailor each of our three escape room party packages to your unique celebration and number of people. Your party will work together to uncover clues, solve puzzles, and discover hidden messages in an enclosed environment that they will try to escape from',
		icon: iconStyle(GiBalloons),
		imgClass: 'four',
	},
	{
		name: 'Team Building',
		description: 'Forget the day-long corporate retreat that has everyone yawning by 2pm (even with coffee). If your company is looking for the ultimate team-building experience, you have come to the right place! Here, at Conquer Escape Rooms, we have designed our games to promote teamwork, cooperation, and leadership. This combined with our corporate analysis program provides added value for your team & your company. Employees immersed in a high-pressure environment must rely on each other to succeed, so they instinctively begin to communicate more effectively because they all have a common goal. Escape rooms give your employees the opportunity to share their skills, practice leadership, use their problem-solving abilities, and collaborate with each other all while having fun doing it!',
		icon: iconStyle(RiTeamFill),
		imgClass: 'five',
	},
	{
		name: 'Date Night Fun',
		description: 'Tired of the same old Movie and Dinner Date night?  Come enjoy some friendly competition and fun in one of our 3 escape rooms for 2. Before you know it, 60 minutes will pass and your union will be stronger for the puzzle mastered as a team. You think you and your partner has what it takes? Come on down and Find Out!',
		icon: iconStyle(GiLovers),
		imgClass: 'six',
	},
];
