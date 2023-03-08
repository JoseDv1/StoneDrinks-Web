import Image from "next/image";
import { SuperMenuItem } from "@components/SuperMenuItem";

export default function Home() {
	return (
		<>
			<header>
				<img src="/images/logo.png"></img>
				<h1>Stone Drinks</h1>
			</header>

			<main>
				<SuperMenuItem
					description={"Deliciosas sodas saborizadas con frutas y sabores"}
					image={
						"https://s1.bukalapak.com/img/6745194083/w-1000/Strawberry_Juice_Concentrate_syrup__sirup_jus_konsentrat_bua.jpg"
					}
					title={"Sodas Saborizadas"}
					reverse={false}
				/>
				<SuperMenuItem
					description={
						"Cocteles clasicos y modernos, con o sin alcohol, para todos los gustos, para todos los momentos"
					}
					image={
						"https://s1.bukalapak.com/img/6745194083/w-1000/Strawberry_Juice_Concentrate_syrup__sirup_jus_konsentrat_bua.jpg"
					}
					title={"Cocteles"}
					reverse={true}
				/>
			</main>

			<style jsx>{`
				/* Desktop */
				header {
					background-color: #070141;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 8px 16px;
					gap: 24px;

					height: 80px;
					width: 100vw;
				}

				header img {
					height: 64px;
				}

				header h1 {
					font-size: 40px;
					line-height: 40px;
					align-items: center;
					letter-spacing: 0.02em;
					text-transform: capitalize;
				}

				main {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 32px 16px;
					gap: 16px;
				}
			`}</style>
		</>
	);
}
