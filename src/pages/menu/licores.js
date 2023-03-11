import { Header } from "../../components/Header";
import { MenuItem } from "../../components/MenuItem";
export default function LicoresPage() {
	const licores = [];
	return (
		<>
			<Header title={"Licores"} back={true} />
			<main>
				{licores.map((trago) => (
					<MenuItem
						title={trago.name}
						price={trago.price}
						description={trago.description}
						image={trago.image}
						key={trago.name}
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
