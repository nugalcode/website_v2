import { forwardRef } from 'react';
import '../css/Contact.css';

const Contact = forwardRef((props, ref) => {
    return (
        <div id="Contact" ref={ref}> CONTACT SECTION </div>
    )
})

export default Contact;