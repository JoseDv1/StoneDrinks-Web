export function MenuItem({ title, price, description, image, ...props }) {
	return (
		<>
			<div className="item">
				<div className="item-img"></div>

				<div className="item-description">
					<h3>{title}</h3>
					<p>{description}</p>
					<h2>{`${price}$`}</h2>
				</div>
			</div>

			<style jsx>{`
				.item {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					gap: 16px;

					aspect-ratio: 2/1;
					max-width: 500px;
					max-height: 200px;

					width: 100%;
					padding: 8px 16px;
				}

				.item .item-img {
					background-image: url("https://th.bing.com/th/id/OIP.jWdzZjO4ErzZZfY672NgAwHaHa?pid=ImgDet&w=181&h=181&c=7&dpr=1,4");
					background-size: cover;
					background-position: center;
					height: 100%;
					aspect-ratio: 1/1;
					border-radius: 25%;
				}

				.item .item-description {
					width: max-content;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: start;
				}

				@media (max-width: 550px) {
					.item {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: ;
						gap: 8px;

						max-width: 300px;
						max-height: 300px;
						aspect-ratio: 1/2;

						width: 100%;
						padding: 8px 16px;
					}

					.item .item-img {
						border-radius: 25%;
						aspect-ratio: 1/1;
					}

					.item .item-description {
						width: 100%;
						height: min-content;
						justify-content: start;
						align-items: center;
					}
				}
			`}</style>
		</>
	);
}
