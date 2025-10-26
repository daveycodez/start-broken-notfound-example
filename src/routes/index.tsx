import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
	beforeLoad: async () => {
		throw notFound();
	},
	notFoundComponent: () => <div>Index Not Found</div>, // this is not working
});

function App() {
	return (
		<div>
			<h1>Home Page</h1>
		</div>
	);
}
