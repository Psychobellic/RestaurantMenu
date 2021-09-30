import styles from "../src/styles/layout.module.scss";

import Calendar from "../src/svg/calendar";
import { Button } from "../src/Components/button";

export default function Menu() {
	return (
		<div className={styles.weekdaysWrap}>
			<div className={styles.weekDay}>
				<Calendar />
				<h1>CARDÁPIO DA SEMANA</h1>
			</div>
			<div>
				<Button />
			</div>
		</div>
	);
}
