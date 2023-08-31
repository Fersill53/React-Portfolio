import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
            <h2>Email: fersill53@gmail.com </h2>
            <h2>GitHub: github.com/fersill53 </h2>
        </div>
    )
}

export default Contact;