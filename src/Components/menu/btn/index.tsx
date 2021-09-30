import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

const WEEKDAYS = ["S", "T", "Q", "Q", "S"];

export const Button = () => {
	let [active, setActive] = useState(false);
	let [selectedIndex, setSelectedIndex] = useState(-1);

	useEffect(() => {
		setActive(active);
		console.log(active);
	}, [active, selectedIndex]);

	let Day = Object.values(WEEKDAYS).map((value, index) => {
		let handleClick = () => {
			setSelectedIndex(index);
			if (active && selectedIndex === index) {
				setActive(false);
			} else {
				setActive(true);
			}
		};

		if (active && selectedIndex === index) {
			return (
				<ul key={index + value}>
					<li className={styles.btnWrap}>
						<button
							type="button"
							className={styles.btnActive}
							onClick={handleClick}>
							{value}
						</button>
						<span className={styles.active}>
							<Image
								src="/checkmark-png-25954.png"
								width={32}
								height={32}
								alt="checkmark"
							/>
						</span>
					</li>
				</ul>
			);
		} else {
			return (
				<ul key={index + value}>
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
