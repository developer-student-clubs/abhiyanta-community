import React from 'react';
import CustomizedAccordions from './Faq';
import "./Contact.css";
import { Container } from '@material-ui/core';


function Contact() {
    return (
        <div>
            < CustomizedAccordions />
            <Container>
            <iframe title="contactPage" className="form" src="https://form.typeform.com/to/NmQXsN32" frameborder="0" marginheight="0" marginwidth="0">
            </iframe>
            </Container>
        </div>
    );
}

export default Contact;