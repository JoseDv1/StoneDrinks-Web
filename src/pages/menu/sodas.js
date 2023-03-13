import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";

export default function SodasPage({ ...props }) {
	//  Frutos Rojos, Frutos Verdes, Mango, Manzana Verde, Maracuya, Cereza, Fresa, Sandia, Kiwi, Lyche °°
	const sodas = [
		{
			name: "Soda de Frutos Rojos",
			price: "8000$",
			description: "Sabrosa soda de frutos rojos",
			image: "/images/sodas/FrutosRojos.jpg",
		},
		{
			name: "Soda de Frutos Verdes",
			price: "8000$",
			description: "Sabrosa soda de frutos verdes",
			image: "/images/sodas/FrutosVerdes.jpg",
		},
		{
			name: "Soda de Mango",
			price: "8000$",
			description: "Sabrosa soda de mango",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Soda de Manzana Verde",
			price: "8000$",
			description: "Sabrosa soda de manzana verde",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Soda de Maracuya",
			price: "8000$",
			description: "Sabrosa soda de maracuya",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Soda de Cereza",
			price: "8000$",
			description: "Sabrosa soda de cereza",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Soda de Fresa",
			price: "8000$",
			description: "Sabrosa soda de fresa",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Soda de Sandia",
			price: "8000$",
			description: "Sabrosa soda de sandia",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Soda de Kiwi",
			price: "8000$",
			description: "Sabrosa soda de kiwi",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Soda de Lyche",
			price: "8000$",
			description: "Sabrosa soda de lyche",
			image: "/images/placeholder.jpg",
		},
	];
	return (
		<>
			<Header title={"Sodas Saborizadas"} price={"$8000"} back={true} />
			<main>
				{sodas.map((soda) => (
					<MenuItem
						title={soda.name}
						price={soda.price}
						description={soda.description}
						image={soda.image}
						key={soda.name}
					/>
				))}
			</main>
			<style jsx>{`
				main {
					margin: 32px 0;
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
					width: 100%;
					place-items: center;
					gap: 16px;
				}
			`}</style>
		</>
	);
}
