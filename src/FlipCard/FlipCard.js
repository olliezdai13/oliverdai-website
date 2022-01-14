import React, { useState } from 'react';
import classNames from 'classnames';
import './FlipCard.css';

function FlipCard(props) {
    const [flipped, setFlipped] = useState(false);
  return (
    <div className="flip-card" onClick={() => {setFlipped(!flipped)}}>
        <div className={classNames("flip-card-inner", {"flipped": flipped})}>
            <div className={'flip-card-front'}>{props.children[0]}</div>
            <div className={'flip-card-back'}>{props.children[1]}</div>
        </div>
    </div>
  );
}

export default FlipCard;
