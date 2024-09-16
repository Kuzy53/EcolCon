import React, { useState } from 'react';
import styles from './AdditionalInfo.module.css';
import SelectEvents from './EventFilter';
import BloksEvents from './BloksEvents';
import Footer from './Footer';
const AdditionalInfo = () => {


  return (
<section className={styles.additionalInfo} >
  <div className={styles.container} >
  <SelectEvents/>
  <BloksEvents/>
  <Footer/>
  </div>
    <img src="src/assets/main/blot1.png" className={styles.blot1} alt="" />
    <img src="src/assets/main/blot2.png" className={styles.blot2} alt="" />
    <img src="src/assets/main/blot3.png" className={styles.blot3} alt="" />

</section>
  );
};

export default AdditionalInfo;