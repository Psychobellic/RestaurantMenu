import "../src/styles/globals.scss";

import type { AppProps } from "next/app";

import Layout from "../src/Components/Layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
