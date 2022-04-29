import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Input from '../../components/Input/Input.component';
import { Container, Section } from '../../globalStyles';
import { Button } from './Contact.styles'
const ContactScreen = () => {
    const [customerEmail, setCustomerEmail] = useState('');
    const [emailBody, setEmailBody] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [name, setName] = useState('');

    const handleCustomerEmailChange = event => {
        let { value } = event.target;
        setCustomerEmail(value)
    }
    const handlePhoneNumberChange = event => {
        let { value } = event.target;
        setPhoneNumber(value)
    }
    const handleEmailBodyChange = event => {
        let { value } = event.target;
        setEmailBody(value)
    }
    const handleNameChange = event => {
        let { value } = event.target;
        setName(value)
    }
    let history = useHistory();

    const sendEmail = async (customerEmail, emailBody, phoneNumber, name) => {
        await axios.post('http://localhost:3201/send-email', {
            customerEmail,
            emailBody,
            phoneNumber,
            name
        })
            .then(function (response) {
                if(response.data.success === 'Email sent successfully'){
                    alert('Email sent to Conquer Escape Rooms successfully')
history.push('/')                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <Section inverse reverse style={{ marginTop: '20vh', alignContent: 'center' }}>
            <Container>
                <Input
                    name='email'
                    type='email'
                    handleChange={handleCustomerEmailChange}
                    value={customerEmail}
                    label='Email'
                    autoComplete="on"
                    required

                />
            </Container>
            <Container>
                <Input
                    name='name'
                    type='name'
                    handleChange={handleNameChange}
                    value={name}
                    label='Name'
                    autoComplete="on"
                    required

                />
            </Container>
            <Container>
                <Input
                    name='phone'
                    type='number'
                    handleChange={handlePhoneNumberChange}
                    value={phoneNumber}
                    label='Phone Number'
                    autoComplete="on"
                    required
                />

            </Container>
            <Container>

                <Input handleChange={handleEmailBodyChange} placeholder={'Your Message Here'} label={'Questions, Comments, Concerns'} shrink textArea />
            </Container>
            <Container>

                <Button style={{ marginLeft: '28vw' }} inverse fontBig onClick={() => sendEmail(customerEmail, emailBody, phoneNumber, name)}>send email</Button>
            </Container>
        </Section>
    )
};
export default ContactScreen;