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
				</div>
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
				}

				.item .item-img {
					background-image: url(${image});
					background-size: cover;
					background-position: center;
					aspect-ratio: 1/1;
					width: 50%;
					border-radius: 50%;
					flex-shrink: 0;
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

				.item.reverse {
					flex-direction: row-reverse;
				}

				.item.reverse .item-description {
					text-align: start;
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
