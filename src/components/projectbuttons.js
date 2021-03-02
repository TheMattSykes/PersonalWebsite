import React from 'react';
import projectButtonStyles from './projectbuttons.module.scss';

function ProjectButtons({projecturl, projectEnable, sourceurl, sourceEnable, dark}) {
  return (
    <div className={projectButtonStyles.container}>

        {projectEnable
        ? <a className={dark ? projectButtonStyles.buttondark : projectButtonStyles.button} href={projecturl} target="_blank" rel="noreferrer">View Project</a>
        : null
        }

        {sourceEnable
        ? <a className={dark ? projectButtonStyles.buttondark : projectButtonStyles.button} href={sourceurl} target="_blank" rel="noreferrer">View Source Code</a>
        : null
        }
    </div>
  );
}

export default ProjectButtons;