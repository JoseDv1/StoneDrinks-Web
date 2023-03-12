import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";

export default function MalteadasPage({ ...props }) {
	// -Vainilla, Fresa, Chocolate, Café, Vainilla con mora **, Oreo, Milo, Frutos Rojos **, Maracuya **
	const malteadas = [
		{
			name: "Malteada de Vainilla",
			price: "10.000$",
			description: "Sabrosa malteada de vainilla",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Malteada de Fresa",
			price: "10.000$",
			description: "Sabrosa malteada de fresa",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Malteada de Chocolate",
			price: "10.000$",
			description: "Sabrosa malteada de chocolate",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Malteada de Café",
			price: "10.000$",
			description: "Sabrosa malteada de café",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Malteada de Vainilla con mora",
			price: "10.000$",
			description: "Sabrosa malteada de vainilla con mora",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Malteada de Oreo",
			price: "12.000$",
			description:
				"Disfruta de una deliciosa malteada de oreo con salsa de chocolate, helado de vainilla y trocitos de galleta",
			image: "/images/malteadas/Oreo.jpg",
		},
		{
			name: "Malteada de Milo",
			price: "12.000$",
			description: "Sabrosa malteada de milo",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Malteada de Frutos Rojos",
			price: "12.000$",
			description: "Sabrosa malteada de frutos rojos",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Malteada de Maracuya",
			price: "12.000$",
			description: "Sabrosa malteada de maracuya",
			image: "/images/placeholder.jpg",
		},
	];
	return (
		<>
			<Header title={"Malteadas"} back={true} />
			<main>
				{malteadas.map((malteada) => (
					<MenuItem
						title={malteada.name}
						price={malteada.price}
						description={malteada.description}
						image={malteada.image}
						key={malteada.name}
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
