import { Header } from "@components/Header";
import { MenuItem } from "@components/MenuItem";

export default function ShotsPage({ ...props }) {
	return (
		<>
			<Header title={"Shots"} price={"$7000"} back={true} />
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
