import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Logo from "../src/Components/logo";
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
			<main>
				<Logo />
				<div className="banner" />
				<Menu />
			</main>
		</>
	);
};

export default Home;
