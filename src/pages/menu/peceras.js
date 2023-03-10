import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";

export default function SodasPage({ ...props }) {
	return (
		<>
			<Header title={"Sodas Saborizadas"} price={"$8000"} back={true} />
			<main></main>
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
