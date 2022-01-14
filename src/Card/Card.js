import React from 'react';
import './Card.css';
import natlogo from './natlogo.png'

function Card() {
  return (
    <div className="Card">
        <div className="Card-contents">
            <div className="Card-left">
            <img className="Card-image" src={natlogo} alt="olivers logo"></img>
            </div>
            <div className="Card-middle">
            <div className="Card-vertical-line"></div>
            </div>
            <div className="Card-card-right">
            <div className="Card-details-container">
                <div className="Card-details-name">
                Oliver Dai
                </div>
                <div className="Card-details-item">
                <a className="Card-details-link" href="mailto: olliezdai@gmail.com" target="_blank" rel="noreferrer">olliezdai@gmail.com</a>
                </div>
                <div className="Card-details-item">
                <a className="Card-details-link" href="https://www.linkedin.com/in/olliezdai/" target="_blank" rel="noreferrer">linkedin.com/in/olliezdai/</a>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
