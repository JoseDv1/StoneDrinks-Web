import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";

export default function JugosPage({ ...props }) {
	// Jugos de frutas sabores:
	// - Mango Mora Maracuya Fresa Lulo Guanabana Mandarina Limonadas
	const jugos = [
		{
			name: "Jugos de Mango",
			price: "6000$ - 7000$",
			description: "Jugo de mango natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Jugos de Mora",
			price: "6000$ - 7000$",
			description: "Jugo de mora natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Jugos de Maracuya",
			price: "6000$ - 7000$",
			description: "Jugo de maracuya natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Jugos de Fresa",
			price: "6000$ - 7000$",
			description: "Jugo de fresa natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Jugos de Lulo",
			price: "6000$ - 7000$",
			description: "Jugo de lulo natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Jugos de Guanabana",
			price: "6000$ - 7000$",
			description: "Jugo de guanabana natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Jugos de Mandarina",
			price: "6000$ - 7000$",
			description: "Jugo de mandarina natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Jugos de Limonadas",
			price: "6000$ - 7000$",
			description: "Jugo de limonada natural",
			image: "/images/placeholder.jpg",
		},
	];

	return (
		<>
			<Header title={"Jugos Naturales"} back={true} />
			<main>
				{jugos.map((jugo) => (
					<MenuItem
						title={jugo.name}
						price={jugo.price}
						description={jugo.description}
						image={jugo.image}
						key={jugo.name}
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
