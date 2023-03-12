import Image from "next/image";
import Link from "next/link";
export function Footer() {
	return (
		<>
			<footer>
				<div className="brand">
					<Image
						src="/images/logo.png"
						alt="Stone Drinks"
						width={100}
						height={64}
					/>
					<h1>Stone Drinks</h1>
				</div>
				<div className="social">
					<Link
						href={"https://www.facebook.com/Stone.drinks/"}
						className="social-item"
					>
						Facebook
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
						</svg>
					</Link>
					<Link
						href={"https://www.instagram.com/stone_drinks/"}
						className="social-item"
					>
						Instagram
						<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
							<path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
						</svg>
					</Link>
				</div>
			</footer>
			<style jsx>{`
				footer {
					width: 100%;
					height: 100px;
					background: #070141;
					justify-content: center;
					align-items: center;
					display: grid;
					grid-template-columns: repeat(2, 1fr);
				}

				.brand {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
				}

				h1 {
					font-size: 24px;
				}

				.social {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 16px;
				}

				.social svg {
					fill: #fff;
					height: 32px;
					width: 32px;
				}
			`}</style>
			<style jsx global>{`
				.social-item {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
				}
			`}</style>
		</>
	);
}
