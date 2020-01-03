import React from 'react';
import Link from 'next/link';
import Styles from './Footer.scss';

const Footer = () => {
  return (
    <div className={Styles.footerContainer}>
      <ul className={Styles.footerContainerWrapper}>
        <h5 className={Styles.footerContainerWrapperHeading}>Pages</h5>
        <li className={Styles.footerContainerWrapperItem}>
          <Link href='/'>
            <a className={Styles.footerContainerWrapperLink}>Home</a>
          </Link>
        </li>
        <li className={Styles.footerContainerWrapperItem}>
          <Link href='/dishes'>
            <a className={Styles.footerContainerWrapperLink}>Food & Drinks</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
