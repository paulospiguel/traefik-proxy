import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paulo Spiguel</title>
        <meta name="description" content="" />
      </Head>
      <h1>WEB Page</h1>
      <p>Paulo Spiguel</p>
    </div>
  );
};

export default Home;
