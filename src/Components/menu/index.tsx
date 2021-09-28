import WeekDay from "./body/weekDay";
import MenuSelection from "./body/menuSelection";
import Suggestion from "./body/suggestion";

import styles from "./styles.module.scss";

export default function Menu() {
	return (
		<div className={styles.weekdays}>
			<WeekDay />
			<MenuSelection />
			<Suggestion />
		</div>
	);
}
