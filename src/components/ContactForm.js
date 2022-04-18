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
                <input type="text" name="name" placeholder="name" className="courier field" />
                <input type="email" name="email" placeholder="email" className="courier field" />
                <textarea name="message" id="messageform"
                    className="courier" placeholder="message"/>
                <input type="submit" value="Send" className="sendButton courier"/>
            </form>
        </div>
    );
};

export default EmailForm;
