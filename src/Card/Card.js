import React from 'react';
import './Card.css';
import FlipCard from '../FlipCard/FlipCard';
import natlogo from './natlogo.png'

function Card() {
  return (
    <FlipCard>
      <div className="Card">
          <div className="Card-contents">
              <div className="Card-left">
              <img className="Card-image" src={natlogo} alt="olivers logo"></img>
              </div>
              <div className="Card-middle">
                <div className="Card-vertical-line"></div>
              </div>
              <div className="Card-right">
              <div className="Card-details-container">
                  <div className="Card-details-name">
                  Oliver Dai
                  </div>
                  <div className="Card-details-item">
                  <a className="Card-details-link" href="mailto: olliezdai@gmail.com" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>olliezdai@gmail.com</a>
                  </div>
                  <div className="Card-details-item">
                  <a className="Card-details-link" href="https://www.linkedin.com/in/olliezdai/" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>linkedin.com/in/olliezdai/</a>
                  </div>
              </div>
              </div>
          </div>
      </div>
      <div className="Card">
          <div className="Card-contents">
              <div className='Card-back'>
                idk, I should put something here
              </div>
          </div>
      </div>
    </FlipCard>
  );
}

export default Card;
