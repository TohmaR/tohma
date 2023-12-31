import React from 'react'
import { useMediaQuery } from 'react-responsive'
import LoadingPageMobile from './LoadingPageMobile/LoadingPageMobile';
import LoadingPageDesktop from './LoadingPageDesktop/LoadingPageDesktop';

function LoadingPage() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
	return(
		<div>
            {isDesktop && <LoadingPageDesktop />}
			{isTabletOrMobile && <LoadingPageMobile />}
        </div>
	);
}

export default LoadingPage;
