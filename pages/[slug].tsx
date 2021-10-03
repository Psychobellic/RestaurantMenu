import styles from "../src/styles/slug.module.scss";

import Link from "../src/Components/Link";
import { useRouter } from "next/router";

import Card from "../src/Components/Card";
import { ArrowForward, ArrowDown } from "../src/svg/arrow";

export const Slug = () => {
	const router = useRouter();
	const text = router.asPath;

	if (process.browser && text === "/0") {
		return (
			<>
				<div className={styles.day}>
					<Link href={"/0"} className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowDown />
					</Link>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione
						<strong>uma</strong>
						das opções abaixo:
					</span>
					<div className={styles.cardContainer}>
						<Card option="OPÇÃO 1" content="- Bisteca de Porco" />
						<Card option="OPÇÃO 2" content="- Omelete" />
						<Card option="OPÇÃO 3" content="- Filé de Frango" />
					</div>
				</div>
				<div className={styles.day}>
					<Link href={"/1"} className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/2"} className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/3"} className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/4"} className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowForward />
					</Link>
				</div>
			</>
		);
	} else if (process.browser && text === "/1") {
		return (
			<>
				<div className={styles.day}>
					<Link href={"/0"} className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/1"} className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowDown />
					</Link>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<div className={styles.cardContainer}>
						<Card option="OPÇÃO 1" content="- Bisteca de Porco" />
						<Card option="OPÇÃO 2" content="- Omelete" />
						<Card option="OPÇÃO 3" content="- Filé de Frango" />
					</div>
				</div>
				<div className={styles.day}>
					<Link href={"/2"} className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/3"} className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/4"} className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowForward />
					</Link>
				</div>
			</>
		);
	} else if (process.browser && text === "/2") {
		return (
			<>
				<div className={styles.day}>
					<Link href={"/0"} className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/1"} className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/2"} className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowDown />
					</Link>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<div className={styles.cardContainer}>
						<Card option="OPÇÃO 1" content="- Bisteca de Porco" />
						<Card option="OPÇÃO 2" content="- Omelete" />
						<Card option="OPÇÃO 3" content="- Filé de Frango" />
					</div>
				</div>
				<div className={styles.day}>
					<Link href={"/3"} className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/4"} className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowForward />
					</Link>
				</div>
			</>
		);
	} else if (process.browser && text === "/3") {
		return (
			<>
				<div className={styles.day}>
					<Link href={"/0"} className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/1"} className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/2"} className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/3"} className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowDown />
					</Link>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<div className={styles.cardContainer}>
						<Card option="OPÇÃO 1" content="- Bisteca de Porco" />
						<Card option="OPÇÃO 2" content="- Omelete" />
						<Card option="OPÇÃO 3" content="- Filé de Frango" />
					</div>
				</div>
				<div className={styles.day}>
					<Link href={"/4"} className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowForward />
					</Link>
				</div>
			</>
		);
	} else if (process.browser && text === "/4") {
		return (
			<>
				<div className={styles.day}>
					<Link href={"/0"} className={styles.dayTitle}>
						<h1>SEGUNDA 01/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/1"} className={styles.dayTitle}>
						<h1>TERÇA 02/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/2"} className={styles.dayTitle}>
						<h1>QUARTA 03/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/3"} className={styles.dayTitle}>
						<h1>QUINTA 04/01</h1>
						<ArrowForward />
					</Link>
				</div>
				<div className={styles.day}>
					<Link href={"/4"} className={styles.dayTitle}>
						<h1>SEXTA 06/01</h1>
						<ArrowDown />
					</Link>
					<span className={styles.dayContent}>
						<strong>Guarnição:</strong> arroz, feijão, abobrinha, alface, rúcula
						<br />
						<strong>Sobremesa:</strong>arroz doce
						<br />
						<br />
						Para <strong>acompanhamento</strong> selecione <strong>uma</strong>
						das opções abaixo:
					</span>
					<div className={styles.cardContainer}>
						<Card option="OPÇÃO 1" content="- Bisteca de Porco" />
						<Card option="OPÇÃO 2" content="- Omelete" />
						<Card option="OPÇÃO 3" content="- Filé de Frango" />
					</div>
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default Slug;
