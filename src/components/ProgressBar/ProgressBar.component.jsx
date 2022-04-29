import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '17.5vw',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		marginTop: 10,
		marginBottom: 5,
	}
	
	const Childdiv = {
		height: '5vh',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
