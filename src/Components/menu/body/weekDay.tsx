import Calendar from "../../../svg/calendar";
import Button from "../btn/index";

import styles from "./styles.module.scss";

export default function weekDay() {
	return (
		<div className={styles.weekdaysWrap}>
			<div className={styles.weekDay}>
				<Calendar />
				<h1>CARDÁPIO DA SEMANA</h1>
			</div>
			<div className={styles.buttons}>
				<Button />
			</div>
		</div>
	);
}
