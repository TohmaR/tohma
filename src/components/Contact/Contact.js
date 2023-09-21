import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ContactDesktop from './ContactDesktop/ContactDesktop';
import ContactMobile from './ContactMobile/ContactMobile';

function Contact() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
	return(
		<div>
			{isDesktop && <ContactDesktop />}
			{isTabletOrMobile && <ContactMobile />}
        </div>
	);
}

export default Contact;
