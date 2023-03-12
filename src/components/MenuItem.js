import Image from "next/image";

export function MenuItem({ title, price, description, image, ...props }) {
	return (
		<>
			<div className="item">
				<div className="item-img item-image">
					<Image
						src={image}
						alt={title}
						width={200}
						height={200}
						className="product-image"
					/>
				</div>
				<div className="item-description">
					<h2>{title}</h2>
					<p>{description}</p>
					<h3>{`${price}`}</h3>
				</div>
			</div>

			<style jsx>{`
				.item {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 8px;
					width: 100%;
					max-width: 300px;
				}

				.item .item-description {
					justify-content: center;
					align-items: center;
					text-align: center;
				}

				.item .item-description h3 {
					font-size: 1.5rem;
				}
			`}</style>

			{/* Global styles */}
			<style jsx global>{`
				.item img.product-image {
					border-radius: 25%;
					box-shadow: 0 4px 6px 3px rgba(0, 0, 0, 0.25);
				}
			`}</style>
		</>
	);
}
