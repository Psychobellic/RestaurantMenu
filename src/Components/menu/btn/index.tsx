import React, { useState } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

const WEEKDAYS = ["S", "T", "Q", "Q", "S"];

export const Button = () => {
	let [active, setActive] = useState(false);
	let [selectedIndex, setSelectedIndex] = useState(0);

	let Day = Object.values(WEEKDAYS).map((value, index) => {
		let handleClick = () => {
			setSelectedIndex(index);
			!active && selectedIndex === index ? setActive(true) : setActive(false);
		};

		if (active && selectedIndex === index) {
			return (
				<div className={styles.btnWrap} key={index + value}>
					<button
						key={index + value}
						type="button"
						className={styles.btnActive}
						onClick={handleClick}>
						{value}
					</button>
					<span className={styles.active}>
						<Image
							src="/checkmark-png-25954.png"
							width={64}
							height={64}
							alt="checkmark"
						/>
					</span>
				</div>
			);
		} else {
			return (
				<div className={styles.btnWrap} key={index}>
					<button
						type="button"
						className={styles.btnInactive}
						onClick={handleClick}>
						{value}
					</button>
					<span className={styles.inactive}>{"?"}</span>
				</div>
			);
		}
	});

	return <div className={styles.button}>{Day}</div>;
};
