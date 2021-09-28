import react, { useState } from "react";
import styles from "./styles.module.scss";

const WEEKDAYS = ["S", "T", "Q", "Q", "S"];

export default function Button() {
	const [active, setActive] = useState(false);
	let handleClick = () => {
		!active ? setActive(active) : setActive(false);
	};

	let Day = Object.values(WEEKDAYS).map((value, index) => {
		return (
			<div className={!active ? styles.btnWrap : styles.btnActive} key={index}>
				<button
					type="button"
					className={styles.btn}
					onClick={() => handleClick}>
					{value}
				</button>
				<span>{!active ? "?" : "v"}</span>
			</div>
		);
	});

	return <div className={styles.button}>{Day}</div>;
}
