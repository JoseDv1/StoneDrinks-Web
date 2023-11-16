export type Menu = {
	[key: string]: {
		items: Array<Item>;
		image: string;
	};
};

export type Item = {
	name: string;
	price: string;
	description: string;
	image: string;
}


export const menu: Menu = {
	"clasic-cocktails": {
		items: [
			{
				name: "Cuba libre",
				price: "15.000$",
				description: "Refrescante combinado de ron, lima y cola.",
				image: "/imgs/cocteles/CubaLibre.jpg",
			},
			{
				name: "Margarita",
				price: "22.000$",
				description: "Un clásico cóctel de tequila, limon y triple sec.",
				image: "/imgs/cocteles/Margarita.jpg",
			},
			{
				name: "Mojito",
				price: "20.000$",
				description:
					"El clásico mojito de ron, lima y hierbabuena. Disponible de varios sabores.",
				image: "/imgs/cocteles/Mojito.jpg",
			},
			{
				name: "Old Fashion",
				price: "25.000$",
				description:
					"Disfruta de un clásico cóctel old fashion. Este combinado de whisky, azúcar y amargos te transportará a una época de neones y sintetizadores mientras admiras los coloridos zócalos de Guatapé",
				image: "/imgs/cocteles/OldFashion.jpg",
			},
			{
				name: "Martini",
				price: "20.000$",
				description: "El clásico cóctel de ginebra y vermut seco.",
				image: "/imgs/cocteles/Martini.jpg",
			},
			{
				name: "Vodka Martini",
				price: "22.000$",
				description: "Un cambio de ritmo con el vodka martini.",
				image: "/imgs/cocteles/Martini.jpg",
			},
			{
				name: "Tom Collins",
				price: "20.000$",
				description:
					"Ginebra, limón y soda, Un clásico cóctel americano. Ve a buscar a ese tal Tom Collins, habla mal de ti",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Piña colada",
				price: "20.000$",
				description:
					"La piña colada es el cóctel perfecto para disfrutar del sabor del Caribe. Esta bebida refrescante y cremosa combina el ron blanco con la crema de coco y el jugo de piña natural. Prueba esta delicia tropical y siente la brisa marina en tu paladar.",
				image: "/imgs/cocteles/PiñaColada.jpg",
			},
			{
				name: "Coco Loco",
				price: "30.000$",
				description:
					"Un viaje sensorial al Caribe tropical con una explosión de sabores. Disfruta de esta deliciosa mezcla de vodka, tequila, ron blanco, leche condensada y crema de coco",
				image: "/imgs/cocteles/CocoLoco.jpg",
			},

			{
				name: "Destornillador",
				price: "20.000$",
				description:
					"Disfruta de este clásico americano con un toque tropical, hecho con vodka y jugo de naranja natural. Acompañalo con una de las mejores vistas al embalse de Guatapé",
				image: "/imgs/cocteles/destornillador.jpg",
			},
			{
				name: "Negroni",
				price: "22.000$",
				description:
					"Un coctel con glamour y elegancia, con ginebra, vermut rojo y Campari",
				image: "/imgs/cocteles/Negroni.jpg",
			},
			// {
			// 	name: "Boulevardier",
			// 	price: "25.000$",
			// 	description:
			// 		"Whiskey Americano, Campari y Vermut Rojo. Un toque de elegancia y finura para tu paladar",
			// 	image: "/imgs/placeholder.jpg",
			// },
			{
				name: "Sex on the beach",
				price: "25.000$",
				description:
					"Un coctel refrescante y dulce con vodka, jugo de naranja, durazno y granadina",
				image: "/imgs/cocteles/SexOnTheBeach.jpg",
			},
			{
				name: "Tequila Sunrise",
				price: "25.000$",
				description:
					"Disfruta de un delicioso Tequila Sunrise, el cóctel clásico que te transporta al amanecer de Acapulco con su mezcla de tequila, jugo de naranja y granadina",
				image: "/imgs/cocteles/SexOnTheBeach.jpg",
			},
			{
				name: "Moscow Mule",
				price: "25.000$",
				description: "¿Lo quieres por el vodka o por la canción?",
				image: "/imgs/cocteles/MoscowMule.jpg",
			},
			// {
			// 	name: "Bramble",
			// 	price: "22.000$",
			// 	description:
			// 		"Syrup de mora Azul, ginebra y limón, algo fuera de lo común",
			// 	image: "/imgs/placeholder.jpg",
			// },
			// {
			// 	name: "Aperol Spritz",
			// 	price: "15.000$",
			// 	description: "Una cuba libre",
			// 	image: "/imgs/placeholder.jpg",
			// },
			// {
			// 	name: "Manhattan",
			// 	price: "15.000$",
			// 	description: "Una cuba libre",
			// 	image: "/imgs/placeholder.jpg",
			// },
			// {
			// 	name: "Cosmopolitan",
			// 	price: "15.000$",
			// 	description: "Una cuba libre",
			// 	image: "/imgs/placeholder.jpg",
			// },
			// {
			// 	name: "Lemon Drop",
			// 	price: "22.000$",
			// 	description:
			// 		"Limon, triple sec y vodka en un cóctel refrescante con azucar en su borde",
			// 	image: "/imgs/cocteles/LemonDrop.jpg",
			// },
		],
		image: "/imgs/menuImages/clasic_Cocktails.jpg",
	},
	// cocktails: {
	// 	items: [
	// 		// {
	// 		// 	name: "Stone White Russian",
	// 		// 	price: "15.000$",
	// 		// 	description: "Una cuba libre",
	// 		// 	image: "/imgs/placeholder.jpg",
	// 		// },
	// 		// {
	// 		// 	name: "Stone Long Island",
	// 		// 	price: "15.000$",
	// 		// 	description: "Una cuba libre",
	// 		// 	image: "/imgs/placeholder.jpg",
	// 		// },
	// 		// {
	// 		// 	name: "Esperanza Stone",
	// 		// 	price: "15.000$",
	// 		// 	description: "Una cuba libre",
	// 		// 	image: "/imgs/placeholder.jpg",
	// 		// },
	// 		// {
	// 		// 	name: "Stone Bloody Mary",
	// 		// 	price: "15.000$",
	// 		// 	description: "Una cuba libre",
	// 		// 	image: "/imgs/placeholder.jpg",
	// 		// },
	// 	],
	// 	image: "/imgs/menuImages/cocktails.jpg",
	// },
	jugos: {
		items: [
			{
				name: "Jugos de Mango",
				price: "6000$ - 7000$",
				description: "Jugo de mango natural",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Jugos de Mora",
				price: "6000$ - 7000$",
				description: "Jugo de mora natural",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Jugos de Maracuya",
				price: "6000$ - 7000$",
				description: "Jugo de maracuya natural",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Jugos de Fresa",
				price: "6000$ - 7000$",
				description: "Jugo de fresa natural",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Jugos de Lulo",
				price: "6000$ - 7000$",
				description: "Jugo de lulo natural",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Jugos de Guanabana",
				price: "6000$ - 7000$",
				description: "Jugo de guanabana natural",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Jugos de Mandarina",
				price: "6000$ - 7000$",
				description: "Jugo de mandarina natural",
				image: "/imgs/placeholder.jpg",
			},
		],
		image: "/imgs/menuImages/jugos.jpg",
	},
	limonadas: {
		items: [
			{
				name: "Limonada Natural",
				price: "6000$ - 7000$",
				description: "Limonada de mango natural",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Limonada de Coco",
				price: "8000$",
				description: "",
				image: "/imgs/jugos/LimonadaCoco.jpg",
			},
			{
				name: "Limonada de Cereza",
				price: "8000$",
				description: "Limonada de cereza natural",
				image: "/imgs/jugos/LimonadaCereza.jpg",
			},
			{
				name: "Limonada de Hierbabuena",
				price: "8000$",
				description: "Limonada de hierbabuena natural",
				image: "/imgs/jugos/LimoHierbabuena.jpg",
			},
			{
				name: "Limonada de Mango",
				price: "8000$",
				description: "Limonada de mango natural",
				image: "/imgs/placeholder.jpg",
			},
		],
		image: "/imgs/menuImages/limonadas.jpg",
	},
	// licores: [],
	malteadas: {
		items: [
			{
				name: "Malteada de Vainilla",
				price: "10.000$",
				description: "Sabrosa malteada de vainilla",
				image: "/imgs/malteadas/MalteadaVainilla.jpg",
			},
			{
				name: "Malteada de Fresa",
				price: "10.000$",
				description: "Sabrosa malteada de fresa",
				image: "/imgs/malteadas/MalteadaFresa.jpg",
			},
			{
				name: "Malteada de Chocolate",
				price: "10.000$",
				description: "Sabrosa malteada de chocolate",
				image: "/imgs/malteadas/MalteadaChocolate.jpg",
			},
			{
				name: "Malteada de Café",
				price: "10.000$",
				description: "Sabrosa malteada de café",
				image: "/imgs/malteadas/MalteadaCafe.jpg",
			},
			{
				name: "Malteada de Vainilla con mora",
				price: "10.000$",
				description: "Sabrosa malteada de vainilla con mora",
				image: "/imgs/malteadas/VainillaMora.jpg",
			},
			{
				name: "Malteada de Oreo",
				price: "12.000$",
				description:
					"Disfruta de una deliciosa malteada de oreo con salsa de chocolate, helado de vainilla y trocitos de galleta",
				image: "/imgs/malteadas/Oreo.jpg",
			},
			{
				name: "Malteada de Milo",
				price: "12.000$",
				description: "Sabrosa malteada de milo",
				image: "/imgs/malteadas/MalteadaMilo.jpg",
			},
			{
				name: "Malteada de Frutos Rojos",
				price: "12.000$",
				description: "Sabrosa malteada de frutos rojos",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Malteada de Maracuya",
				price: "12.000$",
				description: "Sabrosa malteada de maracuya",
				image: "/imgs/malteadas/MalteadaMaracuya.jpg",
			},
			{
				name: "Malteada de Vainilla",
				price: "10.000$",
				description: "Sabrosa malteada de vainilla",
				image: "/imgs/malteadas/MalteadaVainilla.jpg",
			},
			{
				name: "Malteada de Fresa",
				price: "10.000$",
				description: "Sabrosa malteada de fresa",
				image: "/imgs/malteadas/MalteadaFresa.jpg",
			},
			{
				name: "Malteada de Chocolate",
				price: "10.000$",
				description: "Sabrosa malteada de chocolate",
				image: "/imgs/malteadas/MalteadaChocolate.jpg",
			},
			{
				name: "Malteada de Café",
				price: "10.000$",
				description: "Sabrosa malteada de café",
				image: "/imgs/malteadas/MalteadaCafe.jpg",
			},
			{
				name: "Malteada de Vainilla con mora",
				price: "10.000$",
				description: "Sabrosa malteada de vainilla con mora",
				image: "/imgs/malteadas/VainillaMora.jpg",
			},
			{
				name: "Malteada de Oreo",
				price: "12.000$",
				description:
					"Disfruta de una deliciosa malteada de oreo con salsa de chocolate, helado de vainilla y trocitos de galleta",
				image: "/imgs/malteadas/Oreo.jpg",
			},
			{
				name: "Malteada de Milo",
				price: "12.000$",
				description: "Sabrosa malteada de milo",
				image: "/imgs/malteadas/MalteadaMilo.jpg",
			},
			{
				name: "Malteada de Frutos Rojos",
				price: "12.000$",
				description: "Sabrosa malteada de frutos rojos",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Malteada de Maracuya",
				price: "12.000$",
				description: "Sabrosa malteada de maracuya",
				image: "/imgs/malteadas/MalteadaMaracuya.jpg",
			},
		],

		image: "/imgs/menuImages/malteadas.jpg",
	},
	micheladas: {
		items: [
			{
				name: "Michelada Sencilla",
				price: "10.000$",
				description:
					"Cerveza con limón y sal, perfecto para la vista y tu paladar",
				image: "/imgs/micheladas/Sencilla.jpg",
			},
			{
				name: "Michelada de Mango",
				price: "12.000$",
				description: "Cerveza con limón, sal y trozos de mango",
				image: "/imgs/micheladas/MicheladaMango.jpg",
			},
			{
				name: "Michelada de Maracuya",
				price: "12.000$",
				description: "Cerveza con limón, sal y maracuya",
				image: "/imgs/micheladas/MicheladaMaracuya.jpg",
			},
			{
				name: "Michelada de Cereza",
				price: "12.000$",
				description: "Cerveza con limón, sal y cereza",
				image: "/imgs/micheladas/MicheladaCereza.jpg",
			},
			{
				name: "Michelada Envenenada",
				price: "20.000$",
				description:
					"Cerveza con limón, sal, limón y un trago entre aguardiente, ron, tequila o vodka",
				image: "/imgs/micheladas/Sencilla.jpg",
			},
		],
		image: "/imgs/menuImages/micheladas.jpg",
	},
	// shots: [],
	sodas: {
		items: [
			{
				name: "Soda de Frutos Rojos",
				price: "8000$",
				description: "Sabrosa soda de frutos rojos",
				image: "/imgs/sodas/FrutosRojos.jpg",
			},
			{
				name: "Soda de Frutos Verdes",
				price: "8000$",
				description: "Sabrosa soda de frutos verdes",
				image: "/imgs/sodas/FrutosVerdes.jpg",
			},
			{
				name: "Soda de Maracuya",
				price: "8000$",
				description: "Sabrosa soda de maracuya",
				image: "/imgs/sodas/SodaMaracuya.jpg",
			},
			{
				name: "Soda de Manzana Verde",
				price: "8000$",
				description: "Sabrosa soda de manzana verde",
				image: "/imgs/placeholder.jpg",
			},
			{
				name: "Soda de Fresa",
				price: "8000$",
				description: "Sabrosa soda de fresa",
				image: "/imgs/sodas/FrutosRojos.jpg",
			},
			{
				name: "Soda de Sandia",
				price: "8000$",
				description: "Sabrosa soda de sandia",
				image: "/imgs/sodas/SodaSandia.jpg",
			},
			{
				name: "Soda de Cereza",
				price: "8000$",
				description: "Sabrosa soda de cereza",
				image: "/imgs/sodas/FrutosRojos.jpg",
			},
			{
				name: "Soda de Kiwi",
				price: "8000$",
				description: "Sabrosa soda de kiwi",
				image: "/imgs/sodas/SodaKiwi.jpg",
			},
			{
				name: "Soda de Mango",
				price: "8000$",
				description: "Sabrosa soda de mango",
				image: "/imgs/sodas/FrutosVerdes.jpg",
			},
			{
				name: "Soda de Lyche",
				price: "8000$",
				description: "Sabrosa soda de lyche",
				image: "/imgs/sodas/SodaLyche.jpg",
			},
		],
		image: "/imgs/menuImages/sodas.jpg",
	},
	// cervezas: [],
};
