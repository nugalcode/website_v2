import { forwardRef } from 'react';
import '../css/Contact.css';
import SectionTitle from './SectionTitle.js';
import ContactForm from './ContactForm.js';

const Contact = forwardRef((props, ref) => {
    return (
        <div id="Contact" className="section" ref={ref}>
            <SectionTitle title="Contact" />
            <div className="formWrap">
                <ContactForm />
            </div>

        </div>
    )
})

export default Contact;