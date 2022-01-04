import styles from "./styles.module.scss";

import React from "react";

import { ArrowForward } from "../../svg/arrow";

export default function Menu() {
	return (
		<>
			<div className={styles.day}>
				<div className={styles.dayTitle}>
					<h1>SEGUNDA 01/01</h1>
					<ArrowForward />
				</div>
			</div>
			<div className={styles.day}>
				<div className={styles.dayTitle}>
					<h1>TERÇA 02/01</h1>
					<ArrowForward />
				</div>
			</div>
			<div className={styles.day}>
				<div className={styles.dayTitle}>
					<h1>QUARTA 03/01</h1>
					<ArrowForward />
				</div>
			</div>
			<div className={styles.day}>
				<div className={styles.dayTitle}>
					<h1>QUINTA 04/01</h1>
					<ArrowForward />
				</div>
			</div>
			<div className={styles.day}>
				<div className={styles.dayTitle}>
					<h1>SEXTA 06/01</h1>
					<ArrowForward />
				</div>
			</div>
		</>
	);
}
