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
				}}
				className={styles.box}>
				<ul className={styles.suggestionForm}>
					<li className={styles.formSuggestion}>
						<label htmlFor="suggestion">Message:</label>
						<input
							autoComplete="off"
							type="text"
							name="content"
							className={styles.inputField}
							id={styles.content}
							required
						/>
						<li className={styles.formSubmit}>
							<label htmlFor="submit" />
							<button type="submit" name="submit" className={styles.submit}>
								Submit
							</button>
						</li>
					</li>
				</ul>
			</form>
		</>
	);
}
