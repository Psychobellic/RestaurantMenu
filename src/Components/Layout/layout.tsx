import Head from "next/head";
import styles from "../../styles/layout.module.scss";

import Logo from "../logo";
import { Button } from "../button/index";
import Calendar from "../../svg/calendar";

export default function Layout(children: React.FC) {
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
				<div className={styles.banner} />
				<div className={styles.weekdaysWrap}>
					<div className={styles.weekDay}>
						<Calendar />
						<h1>CARDÁPIO DA SEMANA</h1>
					</div>
					<div>
						<Button />
					</div>
				</div>
				{children}
			</main>
		</>
	);
}
