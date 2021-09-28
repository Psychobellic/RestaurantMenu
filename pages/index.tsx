import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

import Logo from "../src/Components/logo";
import Banner from "../src/Components/banner";
import Menu from "../src/Components/menu";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Prato do Dia</title>
				<meta
					name="description"
					content="Created by Matheus Schiffer as a test case for Jumpi"
				/>
				<link rel="icon" href="/logo.jpg" />
			</Head>
			<main className={styles.main}>
				<Logo />
				<Banner />
				<Menu />
			</main>
		</>
	);
};

export default Home;
