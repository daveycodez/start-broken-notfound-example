import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/en/about")({
	beforeLoad: async () => {
		// 1. Uncomment this line while on http://localhost:3000/en (index page)
		// 2. Modify en.json
		// 3. Notice how Route console.logs "messages" as undefined
		// We're not even on the about page though?
		// await loadMessages("en");
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/en/about"!</div>;
}
