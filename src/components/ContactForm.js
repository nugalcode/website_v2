/* Email contact form using third party emailjs*/
/* General code format is taken from emailjs.com/docs/examples/reactjs/*/
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lhflzma', 'template_6gj417y', form.current, 'user_2Hr9vD9xCqUPtZaYLUNlG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        form.current.reset();
    }

    return (
        <div id="contactForm">
            <form ref={form} onSubmit={sendEmail} id="contactTemplate">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Stephen Curry" className="courier" />
                <label>Your Email</label>
                <input type="email" name="email" placeholder="sc30@example.com" className="courier" />
                <label>Your Message</label>
                <textarea name="message" id="messageform"
                    className="courier" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default EmailForm;
