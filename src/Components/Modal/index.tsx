import styles from "./styles.module.scss";

export default function Modal({ close }) {
	return (
		<div className={styles.modalBg}>
			<div className={styles.modalContainer}>
				<h3 className={styles.text}>Confirmar cardápio da semana?</h3>
				<div className={styles.footer}>
					<button
						onClick={() => {
							alert("Cardápio confirmado! Obrigado.");
						}}>
						Confirmar
					</button>
					<button
						id={styles.cancelBtn}
						onClick={() => {
							close(false);
						}}>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
}
