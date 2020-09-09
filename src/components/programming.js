import React from 'react';
import programmingStyles from './programming.module.scss';

function Programming({name, amount}) {
  return (
    <div className={programmingStyles.container}>
        <p className={programmingStyles.langName}>{name}</p>
        <div className={programmingStyles.back}>
            <div className={programmingStyles.front} style={{"width": amount+"%"}}></div>
        </div>
    </div>
  );
}

export default Programming;