import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";

export default function CocktailsPage({ ...props }) {
	// make a list of objects with this: Cuba libre, Margarita, Mojito, Old Fashion, Martini, Vodka Martini, Tom Collins, Piña colada, Coco Loco, Destornillador, Negroni, Sex on the beach, Tequila Sunrise, Moscow Mule, Bramble, Aperol Spritz, Manhattan, Cosmopolitan.

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
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
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
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Coco Loco",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},

		{
			name: "Destornillador",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Negroni",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Sex on the beach",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
		},
		{
			name: "Tequila Sunrise",
			price: "15.000$",
			description: "Una cuba libre",
			image: "/images/placeholder.jpg",
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
