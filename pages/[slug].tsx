import { useRouter } from "next/router";

export default function Slug() {
	const router = useRouter();
	const { slug } = router.query;
	const text = { slug };

	if (process.browser) {
		return <h1>{text.slug}</h1>;
	} else return null;
}
