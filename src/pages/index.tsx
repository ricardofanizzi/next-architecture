import Layout from '../app/components/layout/Layout';
import styles from '../app/styles/Home.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <section className={styles.main}></section>;
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
