import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ProjectsDesktop from './ProjectsDesktop/ProjectsDesktop';
import ProjectsMobile from './ProjectsMobile/ProjectsMobile';

function Projects() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
	return(
		<div>
			{isDesktop && <ProjectsDesktop />}
			{isTabletOrMobile && <ProjectsMobile />}
        </div>
	);
}

export default Projects;