import Image from "next/image";
import Router from "next/router";

export function Header({ title, price, back = false, ...props }) {
	return (
		<>
			<header>
				<div>
					{back && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1024 1024"
							onClick={() => {
								Router.back();
							}}
						>
							<path
								fill="#fff"
								d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
							/>
						</svg>
					)}
				</div>
				<div className="title">
					<h1>{title}</h1>
					{price && <h2>{price}</h2>}
				</div>
				<div
					className="logo"
					onClick={() => {
						Router.push("/");
					}}
				>
					<Image src={"/images/logo.png"} alt="Logo" width={100} height={64} />
				</div>
			</header>

			<style jsx>{`
				svg {
					width: 24px;
					height: 24px;
					fill: #fff;
					transform: rotate(180deg);
					cursor: pointer;
				}

				header {
					background-color: #070141;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 8px 16px;
					gap: 24px;

					height: 80px;
					min-width: 100vw;
				}

				.title {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: start;
					padding: 0 8px;
				}

				.title h1 {
					font-size: 2.5rem;
					line-height: 40px;
					align-items: center;
					letter-spacing: 0.02em;
					text-transform: capitalize;

					flex: none;
					flex-grow: 1;
					align-self: stretch;

					padding: 0;
					margin: 0;
				}

				.title h2 {
					font-size: 1.5rem;
					color: #d91d80;
				}

				/*Mobile */
				@media (max-width: 550px) {
					/* if the title h1 not have a brother*/
					.title h1:not(:only-child) {
						font-size: 1.5rem;
						line-height: 24px;
						letter-spacing: 0.02em;
						text-transform: capitalize;
					}
				}
			`}</style>
		</>
	);
}
