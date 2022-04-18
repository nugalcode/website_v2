import { forwardRef } from 'react';
import '../css/Contact.css';
import SectionTitle from './SectionTitle.js';
import ContactForm from './ContactForm.js';

const Contact = forwardRef((props, ref) => {
    return (
        <div id="Contact" classname="section" ref={ref}>
            <SectionTitle title="Contact" />
            <ContactForm />

        </div>
    )
})

export default Contact;