import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Head>
				<title>Stone Drinks</title>
				<meta
					name="description"
					content="Stone Drinks, la mejor bebida para tu estancia en Guatapé."
				/>
				<meta
					name="keywords"
					content="Stone Drinks, Guatapé, Bebidas, Sodas, Jugos, Malteadas, Micheladas, Cocktails"
				/>
				<meta name="author" content="Stone Drinks" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/images/logo.png" />
			</Head>

			<style jsx global>{`
				@import url("https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap");

				* {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
					font-family: "Tilt Neon";
					color: #fff;
					font-size: 16px;
				}

				body {
					background: linear-gradient(162.44deg, #070141 0%, #d91d80 100%);
					background-image: url("https://thumbs.gfycat.com/CanineSameEwe-size_restricted.gif");
					background-attachment: fixed;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					display: flex;
					justify-content: center;
					max-width: 100vw;
					overflow-x: hidden;
				}

				h1 {
					font-family: "Tilt Neon";
					font-style: normal;
					font-weight: 400;
					font-size: 40px;
					line-height: 50px;
					display: flex;
					align-items: center;
					letter-spacing: 0.02em;
					text-transform: capitalize;
				}

				a {
					text-decoration: none;
				}
			`}</style>
		</>
	);
}
