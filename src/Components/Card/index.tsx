import styles from "./styles.module.scss";

export default function Card(props: any) {
	return (
		<div className={styles.card}>
			<h1 className={styles.option}>{props.option}</h1>
			<span className={styles.content}>{props.content}</span>
		</div>
	);
}
