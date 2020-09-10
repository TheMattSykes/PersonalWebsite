import React from 'react';
import programmingStyles from './programming.module.scss';

function Programming({name, amount, colourOption}) {
  return (
    <div className={programmingStyles.container}>
        <p className={programmingStyles.langName}>{name}</p>
        <div className={programmingStyles.back}>
            {colourOption == 1 
            ? <div className={programmingStyles.front} style={{"width": amount+"%"}}></div>
            : <div className={programmingStyles.front, programmingStyles.blueBars} style={{"width": amount+"%"}}></div>
            }
        </div>
    </div>
  );
}

export default Programming;