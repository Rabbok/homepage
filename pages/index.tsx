import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Maksym Novikov</title>
      </Head>
      <div>Home Page</div>
    </Layout>
  );
};

export default Home;