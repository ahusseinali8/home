import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Linking } from 'react'
import * as emailjs from 'emailjs-com'
import ContactForm from '../elements/ContactUs';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);
  const [pictureActive, setPictureActive] = useState(false);
  const showContactForm = useState(false)

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const openPicture = (e) => {
    e.preventDefault();
    setPictureActive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const closePicture = (e) => {
    e.preventDefault();
    setPictureActive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="300">
              Aness <span className="text-color-primary"> Hussein Ali </span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="600">
                Entrepreneur, Data Scientist, Software Engineer
                </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="600">
                Ex-Trader, Rapper, Beat Maker
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="1200">
                <ButtonGroup>
                  <Button color="primary" onClick={openModal}>
                    Business Inquiries
                    </Button>
                  <Button color="dark" onClick={openPicture}>
                    Other Inquiries
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            form=<ContactForm/>
            videoTag="iframe" />
          <Modal
            id="video-modal"
            show={pictureActive}
            handleClose={closePicture}
            form=<ContactForm/>
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
