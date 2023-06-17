import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Maksym Novikov</title>
      </Head>
    </Layout>
  )
}