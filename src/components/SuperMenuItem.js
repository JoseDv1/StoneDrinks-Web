export function SuperMenuItem({
	title,
	description,
	image,
	reverse = false,
	...props
}) {
	return (
		<>
			<div className={reverse ? "item reverse" : "item"}>
				<div className="item-img"></div>
				<div className="item-description">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>

			<style jsx>{`
				.item {
					display: flex;
					flex-direction: row;
					justify-content: center;

					padding: 0 16px;
					align-items: center;
					gap: 16px;
					height: 160px;
					max-width: fit-content;
				}

				.item .item-img {
					background-image: url(${image});
					background-size: cover;
					background-position: center;
					aspect-ratio: 1/1;
					height: 100%;
					border-radius: 50%;
					flex-shrink: 0;
				}

				.item .item-description {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: start;
					gap: 16px;
					align-self: stretch;
					height: 100%;
					text-align: end;
				}

				.item .item-description p {
					font-size: 1rem;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;

					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
				}

				.item .item-description h3 {
					width: 100%;
					font-size: 1.5rem;
					line-height: 24px;
					letter-spacing: 0.02em;
					text-transform: capitalize;
				}

				.item.reverse {
					flex-direction: row-reverse !important;
				}

				.item.reverse .item-description {
					text-align: start;
				}

				/* Mobile */
				@media (max-width: 768px) {
					.item .item-img {
						background-image: url(${image});
						background-size: cover;
						background-position: center;
						aspect-ratio: 1/1;
						height: 60%;
						border-radius: 50%;
						flex-shrink: 0;
					}
				}

				/* Very small mobile */
				@media (max-width: 300px) {
					.item .item-description p {
						display: none;
					}
				}
			`}</style>
		</>
	);
}
