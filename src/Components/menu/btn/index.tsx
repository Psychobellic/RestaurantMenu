import styles from "./styles.module.scss";
export default function Button(props: any) {
	return (
		<div className={styles.button}>
			<button type="button" className={styles.btn}>
				{props.day}
			</button>
			<span>?</span>
		</div>
	);
}
