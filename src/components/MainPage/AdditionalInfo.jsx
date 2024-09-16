import React, { useState } from 'react';
import styles from './AdditionalInfo.module.css';
import SelectEvents from './EventFilter';
import BloksEvents from './BloksEvents';
const AdditionalInfo = () => {


  return (
<section>
  <div className={styles.container} >
  <SelectEvents/>
  <BloksEvents/>
  </div>

</section>
  );
};

export default AdditionalInfo;