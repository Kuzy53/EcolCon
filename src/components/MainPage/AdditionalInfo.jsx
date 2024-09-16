import React, { useState } from 'react';
import styles from './AdditionalInfo.module.css';
import SelectEvents from './EventFilter';
import BloksEvents from './BloksEvents';
import Footer from './Footer';
const AdditionalInfo = () => {


  return (
<section>
  <div className={styles.container} >
  <SelectEvents/>
  <BloksEvents/>
  <Footer/>
  </div>

</section>
  );
};

export default AdditionalInfo;