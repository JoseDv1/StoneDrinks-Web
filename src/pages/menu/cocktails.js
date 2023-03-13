import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";

export default function CocktailsPage({ ...props }) {
	const clasicCocktails = [
		{
			name: "Cuba libre",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Margarita",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Mojito",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Old Fashion",
			price: "25.000$",
			description:
				"Disfruta de un clásico cóctel old fashion. Este combinado de whisky, azúcar y amargos te transportará a una época de neones y sintetizadores mientras admiras los coloridos zócalos de Guatapé",
			image: "/images/cocteles/OldFashion.jpg",
		},
		{
			name: "Martini",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Vodka Martini",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Tom Collins",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Piña colada",
			price: "20.000$",
			description:
				"La piña colada es el cóctel perfecto para disfrutar del sabor del Caribe. Esta bebida refrescante y cremosa combina el ron blanco con la crema de coco y el jugo de piña natural. Prueba esta delicia tropical y siente la brisa marina en tu paladar.",
			image: "/images/cocteles/PiñaColada.jpg",
		},
		{
			name: "Coco Loco",
			price: "30.000$",
			description:
				"Un viaje sensorial al Caribe tropical con una explosión de sabores. Disfruta de esta deliciosa mezcla de vodka, tequila, ron blanco, leche condensada y crema de coco",
			image: "/images/cocteles/CocoLoco.jpg",
		},

		{
			name: "Destornillador",
			price: "20.000$",
			description:
				"Disfruta de este clásico americano con un toque tropical, hecho con vodka y jugo de naranja natural. Acompañalo con una de las mejores vistas al embalse de Guatapé",
			image: "/images/cocteles/destornillador.jpg",
		},
		{
			name: "Negroni",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Sex on the beach",
			price: "25.000$",
			description:
				"Un coctel refrescante y dulce con vodka, jugo de naranja, durazno y granadina",
			image: "/images/cocteles/SexOnTheBeach.jpg",
		},
		{
			name: "Tequila Sunrise",
			price: "25.000$",
			description:
				"Disfruta de un delicioso Tequila Sunrise, el cóctel clásico que te transporta al amanecer de Acapulco con su mezcla de tequila, jugo de naranja y granadina",
			image: "/images/cocteles/SexOnTheBeach.jpg",
		},
		{
			name: "Moscow Mule",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Bramble",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Aperol Spritz",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Manhattan",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Cosmopolitan",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
	];
	// - Stone White Russian, Stone Long Island, Esperanza Stone °°, Stone Bloody Mary °°
	let cocktails = [
		{
			name: "Stone White Russian",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Stone Long Island",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Esperanza Stone",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Stone Bloody Mary",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
	];

	return (
		<>
			<Header title={"Cocteles"} back={true} />
			<div>
				<main>
					{clasicCocktails.map((cocktail) => (
						<MenuItem
							title={cocktail.name}
							price={cocktail.price}
							description={cocktail.description}
							image={cocktail.image}
							key={cocktail.name}
						/>
					))}
				</main>
				<h1>Cocteles especiales</h1>
				<main>
					{cocktails.map((cocktail) => (
						<MenuItem
							title={cocktail.name}
							price={cocktail.price}
							description={cocktail.description}
							image={cocktail.image}
							key={cocktail.name}
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
