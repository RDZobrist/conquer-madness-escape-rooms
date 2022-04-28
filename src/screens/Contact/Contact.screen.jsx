import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.production.min';
import { Container } from '../../globalStyles';

const ContactScreen = () => {
    const [customerEmail, setCustomerEmail] = useState('rddzobrist@gmail.com');
    const [emailBody] = useState({
        emailBody: 'this is just a test'
    })
    const handleCustomerEmailChange = e => {
        let {value} = e.target;
        setCustomerEmail(value)
    }
    useEffect(()=>{
        sendEmail(customerEmail, emailBody)
    })
    const sendEmail = (customerEmail, emailBody) => {
        customerEmail = customerEmail;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({customerEmail, emailBody})
        };
        fetch(`http://localhost:3201/send-email`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))

    }

    return (
        <Container>
            <form>
                <input type="text" onChange={handleCustomerEmailChange} placeholder='you@youremail.com
                '/>
            </form>
            <button onClick={sendEmail}>send email</button>
        </Container>
    )
};
export default ContactScreen;