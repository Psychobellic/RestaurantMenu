import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

const WEEKDAYS = ["S", "T", "Q", "Q", "S"];

export const Button = () => {
	let [active, setActive] = useState(false);
	let [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		setActive(active);
	}, [active, selectedIndex]);

	let Day = Object.values(WEEKDAYS).map((value, index) => {
		let handleClick = () => {
			setSelectedIndex(index);
			!active && selectedIndex === index ? setActive(true) : setActive(false);
		};

		if (active && selectedIndex === index) {
			return (
				<ul>
					<li className={styles.btnWrap} key={index + value}>
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
					</li>
				</ul>
			);
		} else {
			return (
				<ul>
					<li className={styles.btnWrap} key={index}>
						<button
							type="button"
							className={styles.btnInactive}
							onClick={handleClick}>
							{value}
						</button>
						<span className={styles.inactive}>{"?"}</span>
					</li>
				</ul>
			);
		}
	});

	return <div className={styles.button}>{Day}</div>;
};
