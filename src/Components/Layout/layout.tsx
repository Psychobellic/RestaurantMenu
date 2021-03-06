import Head from "next/head";
import styles from "../../styles/layout.module.scss";

import Logo from "../logo";
import { Button } from "../Button/index";
import Calendar from "../../svg/calendar";
import Suggestion from "../suggestions";

export default function Layout({ children }) {
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
				<div className={styles.banner}>
					<p className={styles.bannerText}>
						O QUE SERÁ <br /> QUE TEM <br />
						HOJE?
					</p>
				</div>
				<div className={styles.weekdaysWrap}>
					<div className={styles.weekDay}>
						<Calendar />
						<h1>CARDÁPIO DA SEMANA</h1>
					</div>
					<div className={styles.weekdayBtn}>
						<ul>
							<Button />
						</ul>
					</div>
				</div>
				{children}
				<Suggestion />
			</main>
		</>
	);
}
