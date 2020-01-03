import React from 'react';
import 'normalize.css';
import Styles from '../styles/pages/index.scss';
import { ImageHeader } from '../components/Header';
import indexData from '../pagedata/index.json';
import Footer from '../components/Footer';

function Home () {
  return (
    <React.Fragment>
      <ImageHeader
        headerTitle={indexData.title}
        headerSubTitle={indexData.subTitle}
        headerImage={indexData.headerImage}
      />
      <div className={Styles.categoryDishContainer}>
        <h3 className={Styles.categoryDishContainerTitle}>{indexData.contentBlockOneTitle}</h3>
        <p className={Styles.categoryDishContainerText}>{indexData.contentBlockOneText}</p>
        <div className={Styles.foodDrinksContainer}>
          <h4 className={Styles.foodDrinksContainerTitle}>Menu</h4>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
