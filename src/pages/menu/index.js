import Image from "next/image";
import { SuperMenuItem } from "@components/SuperMenuItem";
import { Header } from "@/components/Header";

export default function Menu() {
	return (
		<>
			<Header title={"Stone Drinks"} />

			<content>
				<SuperMenuItem
					title={"Sodas Saborizadas"}
					description={
						"Disfruta de la vista de la repesa de guatape con nuestras sodas saborizadas."
					}
					image={
						"https://th.bing.com/th/id/OIP.72YzgLZsONNLCH002XRZAwHaHa?pid=ImgDet&rs=1"
					}
					reverse={false}
					href={"sodas"}
				/>
				<SuperMenuItem
					title={"Jugos Naturales"}
					description={
						"Jugos de frutas frescas y locales como guanábana, maracuyá y mora, Dulzura natural."
					}
					image={
						"https://www.frutalia.com.co/wp-content/uploads/2020/12/Bebidas-saludables-a-base-de-frutas-frutalia-de-colombia-colombia-bogota-1.jpg"
					}
					reverse={true}
					href={"jugos"}
				/>
				<SuperMenuItem
					title={"Malteadas"}
					description={
						"Malteadas cremosas y espesas de vainilla, chocolate, fresa y más. El complemento ideal para tu estancia en Stone Drinks."
					}
					image={
						"https://www.torani.com/sites/default/files/recipes/illustration/20_milkshakes_0120.jpg"
					}
					reverse={false}
					href={"malteadas"}
				/>
				<SuperMenuItem
					title={"Micheladas"}
					description={
						"Cerveza, Limon y sal, algo mas perfecto que esto? Toma todo mi dinero."
					}
					image={
						"https://th.bing.com/th/id/OIP.MFaezCArKaoU438S7ssLXQHaHa?pid=ImgDet&rs=1"
					}
					reverse={true}
					href={"micheladas"}
				/>
				<SuperMenuItem
					title={"Cocktails"}
					description={
						"Alcohol y frutas en una mezcla perfecta. Prueba el Guatapé Sunrise, el Synthwave y el Peñol Rock."
					}
					image={
						"https://th.bing.com/th/id/OIP.Y6AZ5vc4krmxa1VmXimG1wHaHa?pid=ImgDet&rs=1"
					}
					reverse={false}
					href={"cocktails"}
				/>
				<SuperMenuItem
					title={"Shots - Tragos"}
					description={
						"Pequeñas dosis de alcohol para subir el ánimo. Desde el suave Baileys hasta el fuerte Aguardiente Antioqueño."
					}
					image={
						"https://www.shotsbar.com/wp-content/uploads/2020/06/shot-poiur-980x980.jpg"
					}
					reverse={true}
					href={"shots"}
				/>
				<SuperMenuItem
					title={"Peceras"}
					description={
						"PGrandes recipientes de bebidas refrescantes y divertidas para compartir. Elige entre la pecera tropical, la pecera synthwave o la pecera roja."
					}
					image={
						"https://th.bing.com/th/id/R.1c7779d02361f385a7eab30c6d9c7cce?rik=V7Ai1C6orRALWQ&pid=ImgRaw&r=0"
					}
					reverse={false}
					href={"peceras"}
				/>
				<SuperMenuItem
					title={"Licores"}
					description={
						"Grandes dosis de alcohol para subir el ánimo. Desde el suave Baileys hasta el fuerte Aguardiente Antioqueño."
					}
					image={
						"https://th.bing.com/th/id/OIP.Zh8lJWmgwAlDwu_D77jY7gHaGt?pid=ImgDet&rs=1"
					}
					reverse={true}
					href={"licores"}
				/>
			</content>

			<style jsx>{`
				/* Desktop */
				content {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 64px 16px;
				}
			`}</style>
		</>
	);
}
