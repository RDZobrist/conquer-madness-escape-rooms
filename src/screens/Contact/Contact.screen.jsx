import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './Contact.styles';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [messageBody, setMessageBody] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, phoneNumber, messageBody });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setPhoneNumber('');
		setMessageBody('');
		setError(null);
		setSuccess('Your message was submitted to Conquer Escape Rooms!');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Phone Number',
			value: phoneNumber,
			onChange: (e) => setPhoneNumber(e.target.value),
			type: 'tel',
		},
		{
			label: 'Questions, Comments, Concerns',
			value: messageBody,
			onChange: (e) => setMessageBody(e.target.value),
			type: null,
		},
	];
	let history = useHistory();

	const sendEmail = async (customerEmail, emailBody, phoneNumber, name) => {
		await axios.post('http://localhost:3201/send-email', {
			customerEmail,
			emailBody,
			phoneNumber,
			name
		})
			.then(function (response) {
				if (response.data.success === 'Email sent successfully') {
					alert('Email sent to Conquer Escape Rooms successfully')
					history.push('/')
				}
			})
			.catch(function (error) {
				console.log(error);
			});

	}
	return (
		<FormSection >
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>We Can't Wait To Hear From You</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									{el.type === null ? <textarea onChange={el.onChange} placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value} rows="10" cols="70" />
										:
										<FormInput
											type={el.type}
											placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
											value={el.value}
											onChange={el.onChange}
										/>
									}
								</FormInputRow>
							))}

							<FormButton type="submit" onClick={()=>sendEmail(email, messageBody, phoneNumber, name)}>Submit</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Contact;