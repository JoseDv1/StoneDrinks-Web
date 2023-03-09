export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />

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
