import { createFileRoute } from "@tanstack/react-router";
import { loadMessages } from "@/lib/messages";

export const Route = createFileRoute("/en/")({
	component: App,
	beforeLoad: async () => {
		console.log("Index beforeLoad");

		// If you uncomment the line below, the Route.beforeLoad
		// will get called twice when modifying en.json

		await loadMessages("en");

		// SAME behavior If you uncomment the line below, the Route.beforeLoad
		// will get called twice when modifying en.json

		// (await import(`../../../messages/en.json`)).default;
	},
});

function App() {
	const { messages } = Route.useRouteContext();

	return (
		<div>
			<p>{messages.hello_world}</p>
		</div>
	);
}
