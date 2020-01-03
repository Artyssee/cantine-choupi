import React from 'react';
import Styles from './Navigation.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <React.Fragment>
      {/* Renders the desktop navigation */}
      <div className={Styles.navigationContainer}>
        <ul className={Styles.navigationContainerWrapper}>
          <li>
            <Link href='/'>
              <a className={Styles.navigationContainerWrapperLink}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/dishes'>
              <a className={Styles.navigationContainerWrapperLink}>Food & Drinks</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Renders the mobile navigation */}
      <div className={Styles.mobileNavContainer}>
        <Link href='/'>
          <a className={Styles.mobileNavWrapperLink}>
            Logo
            <img src="" alt="" />
          </a>
        </Link>
        <ul className={Styles.mobileNavWrapper}>
          <li>
            <Link href='/'>
              <a className={Styles.mobileNavWrapperLink}>HomeTest</a>
            </Link>
          </li>
          <li>
            <Link href='/dishes'>
              <a className={Styles.mobileNavWrapperLink}>Food & Drinks</a>
            </Link>
          </li>
        </ul>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </React.Fragment>
  );
};

export default Navigation;
