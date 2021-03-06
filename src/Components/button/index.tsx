import React, { useState, useEffect } from "react";
import Image from "next/image";

import Link from "../Link";

import styles from "./styles.module.scss";

const WEEKDAYS = ["S", "T", "Q", "Q", "S"];

export function Button(props) {
	let [active, setActive] = useState(false);
	let [selectedIndex, setSelectedIndex] = useState(-1);

	useEffect(() => {
		setActive(false);
	}, []);

	let Day = Object.values(WEEKDAYS).map((value, index) => {
		let handleClick = () => {
			setSelectedIndex(index);
			!active ? setActive(true) : null;
		};

		if (active && selectedIndex === index) {
			let stringIndex = index.toString();

			return (
				<li className={styles.btnWrap} key={index + value}>
					<Link
						href={stringIndex}
						as={stringIndex}
						onClick={handleClick}
						passHref={true}
						className={styles.btnActive}>
						{value}
					</Link>
					<Link href={stringIndex} as={stringIndex}>
						<span className={styles.active}>
							<Image
								src="/checkmark-png-25954.png"
								width={32}
								height={32}
								alt="checkmark"
							/>
						</span>
					</Link>
				</li>
			);
		} else {
			let stringIndex = index.toString();
			return (
				<li
					key={index + value}
					className={styles.btnWrap}
					onClick={handleClick}>
					<Link
						href={stringIndex}
						as={stringIndex}
						className={styles.btnInactive}>
						{value}
					</Link>
					<Link href={stringIndex} as={stringIndex}>
						<span className={styles.inactive}>{"?"}</span>
					</Link>
				</li>
			);
		}
	});

	return <div className={styles.button}>{Day}</div>;
}


