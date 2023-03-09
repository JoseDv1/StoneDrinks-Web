import Link from "next/link";

export function SuperMenuItem({
	title,
	description,
	image,
	reverse = false,
	href,
}) {
	return (
		<>
			<Link href={href}>
				<div className={reverse ? "item reverse" : "item"}>
					<div className="item-img"></div>
					<div className="item-description">
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
						<path
							fill="#fff"
							d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
						/>
					</svg>
				</div>
				<hr />
			</Link>

			<style jsx>{`
				.item {
					display: flex;
					flex-direction: row;
					justify-content: space-around;

					align-items: center;
					gap: 16px;

					max-height: 300px;

					width: 100%;
					max-width: 500px;

					padding: 8px 16px;
					margin: 8px 0;
				}

				.item .item-img {
					background-image: url(${image});
					background-size: cover;
					background-position: center;
					aspect-ratio: 1/1;
					width: 50%;
					border-radius: 50%;
					flex-shrink: 0;

					box-shadow: 0px 4px 6px 3px rgba(0, 0, 0, 0.25);
				}

				.item .item-description {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					width: 50%;
					height: 100%;
					gap: 8px;
					text-align: end;
				}

				.item .item-description p {
					font-size: 1rem;
					width: 100%;
				}

				.item .item-description h3 {
					width: 100%;
					font-size: 1.5rem;
					line-height: 24px;
					letter-spacing: 0.02em;
					text-transform: capitalize;
				}

				svg {
					width: 4rem;
				}

				.item.reverse {
					flex-direction: row-reverse;
				}

				.item.reverse .item-description {
					text-align: start;
				}

				.item.reverse svg {
					transform: rotate(180deg);
				}

				/* Mobile */
				@media (max-width: 426px) {
					.item {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						gap: 16px;

						max-height: max-content;
					}

					.item .item-img {
						background-image: url(${image});
						background-size: cover;
						background-position: center;
						aspect-ratio: 1/1;
						width: 70%;
						border-radius: 50%;
						flex-shrink: 0;
					}

					svg {
						display: none;
					}

					.item.reverse {
						flex-direction: column;
					}

					.item .item-description,
					.item.reverse .item-description {
						text-align: center;
					}
				}
			`}</style>
		</>
	);
}
