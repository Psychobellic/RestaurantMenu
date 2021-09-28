import Calendar from "../../svg/calendar";
import styles from "./styles.module.scss";
import Button from "./btn/index";

export default function weekDay() {
	return (
		<div className={styles.weekDay}>
			<Calendar />
			<h1>CARDÁPIO DA SEMANA</h1>
			<Button day={new Date().getDay} />
		</div>
	);
}
