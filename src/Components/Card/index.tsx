import styles from "./styles.module.scss";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Card({ option, content }: any) {
	const [isActive, setActive] = useState(false);

	const router = useRouter();
	const text = router.asPath;

	useEffect(() => {
		isActive ? setActive(false) : null;
	}, []);

	const handleClick = () => {
		setActive(!isActive);
	};

	return (
		<div className={styles.card} onClick={handleClick}>
			<h1 className={styles.option}>{option}</h1>
			<span className={styles.content}>{content}</span>
			{isActive ? (
				<div className={styles.selected}>
					<Image
						alt="whiteCheckmark"
						src="/whiteCheckmark-png-25954.png"
						width="16"
						height="16"
					/>
				</div>
			) : null}
		</div>
	);
}
