import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Styles from './Header.scss';

const ImageHeader = props => {
  const {
    headerTitle,
    headerSubTitle,
    headerImage
  } = props;

  // Added comma to correctly disable line for dynamic backround. Improve this code if possible.
  /*eslint-disable */ 
  const backgroundUrl = { backgroundImage: `url(${headerImage})`, };
  /** eslint-enable */

  return (
    <div className={Styles.headerContainer} style={backgroundUrl}>
      <Navigation />
      <div className={Styles.headerContentContainer}>
        <h1 className={Styles.headerContentContainerTitle}>{headerTitle}</h1>
        <h2 className={Styles.headerContentContainerSubTitle}>{headerSubTitle}</h2>
      </div>
    </div>
  );
};

const normalHeader = () => {
  return (
    <div>
      <h1>NormalHeader</h1>
    </div>
  )
}

ImageHeader.propTypes = {
  headerTitle: PropTypes.string,
  headerSubTitle: PropTypes.string,
  headerImage: PropTypes.string
};

export { ImageHeader, normalHeader };
