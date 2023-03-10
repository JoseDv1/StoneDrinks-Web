import Image from "next/image";

export function MenuItem({ title, price, description, image, ...props }) {
	return (
		<>
			<div className="item">
				<div className="item-img">
					<Image src={image} alt={title} width={200} height={200} />
				</div>
				<div className="item-description">
					<h3>{title}</h3>
					<p>{description}</p>
					<h2>{`${price}`}</h2>
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
			`}</style>

			{/* Global styles */}
			<style jsx global>{`
				.item img {
					border-radius: 25%;
				}
			`}</style>
		</>
	);
}
