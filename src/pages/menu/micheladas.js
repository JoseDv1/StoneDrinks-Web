import { Header } from "@components/Header";
import Image from "next/image";
import { MenuItem } from "@components/MenuItem";

export default function SodasPage({ ...props }) {
	return (
		<>
			<Header title={"Sodas Saborizadas"} price={"$8000"} back={true} />
			<content></content>
			<style jsx>{`
				content {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 3px 16px;
				}
			`}</style>
		</>
	);
}
