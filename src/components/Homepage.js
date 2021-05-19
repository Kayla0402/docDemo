import React from 'react';
import clsx from 'clsx';
import styles from './Homepage.module .css';

export default function Homepage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <img  className={styles.banner} src="../../static/img/banner.png" />
      </div>
    </section>
  );
}
