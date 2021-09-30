import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "../Link";

import styles from "../../styles/layout.module.scss";

const WEEKDAYS = ["S", "T", "Q", "Q", "S"];

export const Button: React.FC = () => {
	let [active, setActive] = useState(false);
	let [selectedIndex, setSelectedIndex] = useState(-1);

	useEffect(() => {
		setActive(active);
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

		if (active === true && selectedIndex === index) {
			let stringIndex = index.toString();
			return (
				<ul key={index + value}>
					<li className={styles.btnWrap}>
						<a>
							<Link
								href={stringIndex}
								as={stringIndex}
								onClick={handleClick}
								passHref={true}
								className={styles.btnActive}>
								{value}
							</Link>
							<span className={styles.active}>
								<Image
									src="/checkmark-png-25954.png"
									width={32}
									height={32}
									alt="checkmark"
								/>
							</span>
						</a>
					</li>
				</ul>
			);
		} else {
			let stringIndex = index.toString();
			return (
				<ul key={index + value}>
					<li className={styles.btnWrap} key={index} onClick={handleClick}>
						<Link
							href={stringIndex}
							as={stringIndex}
							className={styles.btnInactive}>
							{value}
						</Link>
						<span className={styles.inactive}>{"?"}</span>
					</li>
				</ul>
			);
		}
	});

	return <div className={styles.button}>{Day}</div>;
};
