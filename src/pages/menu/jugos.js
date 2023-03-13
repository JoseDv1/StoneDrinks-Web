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
	];

	// Nartural, Coco, Cereza, Hierbabuena, Mango
	const limonadas = [
		{
			name: "Limonada Natural",
			price: "6000$ - 7000$",
			description: "Limonada de mango natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Limonada de Coco",
			price: "8000$",
			description: "",
			image: "/images/jugos/LimonadaCoco.jpg",
		},
		{
			name: "Limonada de Cereza",
			price: "8000$",
			description: "Limonada de cereza natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Limonada de Hierbabuena",
			price: "8000$",
			description: "Limonada de hierbabuena natural",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Limonada de Mango",
			price: "8000$",
			description: "Limonada de mango natural",
			image: "/images/placeholder.jpg",
		},
	];

	return (
		<>
			<Header title={"Jugos Naturales"} back={true} />
			<div>
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
				<h1> Limonadas</h1>
				<main>
					{limonadas.map((limonada) => (
						<MenuItem
							title={limonada.name}
							price={limonada.price}
							description={limonada.description}
							image={limonada.image}
							key={limonada.name}
						/>
					))}
				</main>
			</div>
			<style jsx>{`
				main {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
					width: 100%;
					place-items: center;
					gap: 16px;
				}
				div {
					margin: 32px 0;
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 32px;
					text-align: center;
				}
			`}</style>
		</>
	);
}
