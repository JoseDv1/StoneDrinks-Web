import Image from "next/image";
import { useEffect } from "react";
import Router from "next/router";

export default function Home() {
	useEffect(() => {
		setTimeout(() => {
			Router.push("/menu");
		}, 3000);
	}, []);

	return (
		<>
			<content>
				<Image
					src={"/images/logo.png"}
					alt="Logo"
					width={100 * 4}
					height={64 * 4}
				/>
			</content>
			<style jsx>{`
				content {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100vw;
					height: 100vh;
				}
			`}</style>
		</>
	);
}
