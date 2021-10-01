import React from "react";
import styles from "./styles.module.scss";

export default function Suggestion() {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("sending");
	};

	return (
		<>
			<h1 className={styles.title}>Alguma Sugestão?</h1>
			<form
				method="POST"
				autoComplete="off"
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<ul className={styles.suggestionForm}>
					<li className={styles.formSuggestion}>
						<label htmlFor="suggestion" />
						<input
							autoComplete="off"
							type="text"
							name="content"
							className={styles.inputField}
							id={styles.content}
							required
							placeholder="...Digite Aqui"
						/>
						<li className={styles.formSubmit}>
							<label htmlFor="submit" />
							<a type="submit" className={styles.submit}>
								Finalizar cardápio da semana
							</a>
						</li>
					</li>
				</ul>
			</form>
		</>
	);
}
