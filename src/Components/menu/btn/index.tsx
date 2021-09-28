import react, { useState } from "react";
import styles from "./styles.module.scss";

const WEEKDAYS = ["S", "T", "Q", "Q", "S"];

export default function Button() {
	const [active, setActive] = useState(false);

	let handleClick = () => {
		!active ? setActive(true) : setActive(false);
	};

	let Day = Object.values(WEEKDAYS).map((value, index) => {
		return (
			<div className={styles.btnWrap} key={index}>
				<button
					type="button"
					className={!active ? styles.btnInactive : styles.btnActive}
					onClick={() => handleClick()}>
					{value}
				</button>
				<span className={!active ? styles.inactive : styles.active}>
					{!active ? "?" : "v"}
				</span>
			</div>
		);
	});

	return <div className={styles.button}>{Day}</div>;
}
