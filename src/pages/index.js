import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeature from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.headerCls}>
      <div>
        <img src='../../static/img/banner.png' />
        <div className={styles.contentBox}>
          敬请期待！
        </div>
      </div>
    </header>
  );
}

function MyPlayground(props) {
  return (
    <div>
      <ButtonExample onClick={() => alert('hey!')}>Click me</ButtonExample>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <MyPlayground /> */}
        {/* <HomepageFeature/> */}
        {/* <Homepage/> */}
        {/* <img className={styles.banner} src='../../static/img/banner.png' /> */}
      </main>
    </Layout>
  );
}
