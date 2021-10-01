import styles from "../src/styles/slug.module.scss";
import { useRouter } from "next/router";
import { ArrowForward, ArrowDown } from "../src/svg/arrow";

export const Slug = () => {
	const router = useRouter();
	const text = router.asPath;

	if (process.browser && text === "/0") {
		return (
			<>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowDown />
					</span>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<span> Opções vem aqui.. Placeholder </span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowForward />
					</span>
				</div>
			</>
		);
	} else if (process.browser && text === "/1") {
		return (
			<>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowDown />
					</span>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<span> Opções vem aqui.. Placeholder </span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowForward />
					</span>
				</div>
			</>
		);
	} else if (process.browser && text === "/2") {
		return (
			<>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowDown />
					</span>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<span> Opções vem aqui.. Placeholder </span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowForward />
					</span>
				</div>
			</>
		);
	} else if (process.browser && text === "/3") {
		return (
			<>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowDown />
					</span>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<span> Opções vem aqui.. Placeholder </span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowForward />
					</span>
				</div>
			</>
		);
	} else if (process.browser && text === "/4") {
		return (
			<>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowForward />
					</span>
				</div>
				<div className={styles.day}>
					<span className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowDown />
					</span>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<span> Opções vem aqui.. Placeholder </span>
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default Slug;
