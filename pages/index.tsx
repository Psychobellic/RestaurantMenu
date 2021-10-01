import styles from "../src/styles/slug.module.scss";

import React from "react";

import { ArrowForward } from "../src/svg/arrow";
import Link from "../src/Components/Link";

export default function Menu() {
	return (
		<>
			<div className={styles.day}>
				<Link href={"/0"} className={styles.dayTitle}>
					<h1>SEGUNDA 01/01</h1>
					<ArrowForward />
				</Link>
			</div>
			<div className={styles.day}>
				<Link className={styles.dayTitle}>
					<h1>TERÇA 02/01</h1>
					<ArrowForward />
				</Link>
			</div>
			<div className={styles.day}>
				<Link className={styles.dayTitle}>
					<h1>QUARTA 03/01</h1>
					<ArrowForward />
				</Link>
			</div>
			<div className={styles.day}>
				<Link className={styles.dayTitle}>
					<h1>QUINTA 04/01</h1>
					<ArrowForward />
				</Link>
			</div>
			<div className={styles.day}>
				<Link className={styles.dayTitle}>
					<h1>SEXTA 06/01</h1>
					<ArrowForward />
				</Link>
			</div>
		</>
	);
}
