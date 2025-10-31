import { createFileRoute, Outlet } from "@tanstack/react-router";
import { loadMessages } from "@/lib/messages";

export const Route = createFileRoute("/en")({
	component: RouteComponent,
	beforeLoad: async () => {
		console.log("Route beforeLoad");

		// Modifying en.json does not trigger hard reload
		const messages = await loadMessages("en");

		// Swap to this, then modifying en.json will trigger a hard reload
		// const messages = (await import(`../../../messages/en.json`)).default;

		return { messages };
	},
});

function RouteComponent() {
	const { messages } = Route.useRouteContext();

	console.log("messages", messages);

	return <Outlet />;
}
