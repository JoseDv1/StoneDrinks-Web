import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";

export default function MicheladasPage({ ...props }) {
	//Michelada Sencilla, Michelada de mango, Michelada de maracuya, Michelada de Cereza, Michelada Mexicana, Michelada Envenenada
	const micheladas = [
		{
			name: "Michelada Sencilla",
			price: "10.000$",
			description:
				"Cerveza con limón y sal, perfecto para la vista y tu paladar",
			image: "/images/micheladas/Sencilla.jpg",
		},
		{
			name: "Michelada de Mango",
			price: "12.000$",
			description: "Cerveza con limón, sal y mango",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Michelada de Maracuya",
			price: "12.000$",
			description: "Cerveza con limón, sal y maracuya",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Michelada de Cereza",
			price: "12.000$",
			description: "Cerveza con limón, sal y cereza",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Michelada Mexicana",
			price: "15.000$",
			description: "Cerveza con limón, tajin, salsa picante y limón",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Michelada Envenenada",
			price: "20.000$",
			description:
				"Cerveza con limón, sal, limón y un trago entre aguardiente, ron, tequila o vodka",
			image: "/images/placeholder.jpg",
		},
	];
	return (
		<>
			<Header title={"Micheladas"} back={true} />
			<main>
				{micheladas.map((michelada) => (
					<MenuItem
						title={michelada.name}
						price={michelada.price}
						description={michelada.description}
						image={michelada.image}
						key={michelada.name}
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
