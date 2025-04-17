import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SunLifeLogo from '';
import './BusinessCard.css';

const BusinessCard = ({ name, jobTitle, department, email, phoneNumber, profilePhotoUrl }) => {
    return (
        <div className="business-card">
            <div className="white-section">
                <div>
                    <img 
                        alt="Sun Life Financial logo"
                        src={SunLifeLogo}
                        className='sunlife-logo'
                    />
                </div>
                <img 
                    alt={name}
                    src={profilePhotoUrl || "https://iconicframework.com/docs/img/demos/avatar.svg"}
                    className='profile-picture'
                />
                <p className='name-text'>{name}</p>
                <div className='title-container'>
                    <p className="job-title-text">{jobTitle}</p>
                    {
                        department && (
                            <p className='department'>{`(${department})`}</p>
                        )
                    }
                </div>
            </div>
            <div className="light-brown-section">
                <div className="blue-buttons-section">
                    <button className="contact-button">
                        <fontAwesomeIcon icon={faEnvelope} className='icon-white' />
                    </button>
                    <button className="contact-button">
                        <fontAwesomeIcon icon={faPhone} className='icon-white' />
                    </button>
                    <button className="contact-button">
                        <fontAwesomeIcon icon={faLinkedin} className='icon-white' />
                    </button>
                    <button className="contact-button">
                        <fontAwesomeIcon icon={faGlobe} className='icon-white' />
                    </button>
                    <button className="contact-button">
                        <fontAwesomeIcon icon={faDownload} className='icon-white' />
                    </button>
                </div>
                <div className="connect-box">
                    <p className="connext-text">Let's Connect</p>
                    <hr />
                    <div className='icon-text'>
                        <button className="contact-button-long">
                            <fontAwesomeIcon icon={faPhone} className='connect-box-icon' />
                        </button>
                        <span><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></span>
                    </div>
                    <div className='icon-text'>
                        <button className="contact-button-long">
                            <fontAwesomeIcon icon={faGlobe} className='connect-box-icon' />
                        </button>
                        <span>Visit our website</span>
                    </div>
                    <div className='icon-text'>
                        <button className="contact-button-long">
                            <fontAwesomeIcon icon={faDownload} className='connect-box-icon' />
                        </button>
                        <span>Save contact</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
