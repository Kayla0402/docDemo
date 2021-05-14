import React from 'react';
import Layout from '@theme/Layout';

function Test() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/test.js</code>
        </p>
      </div>
    </Layout>
  );
}

export default Test;