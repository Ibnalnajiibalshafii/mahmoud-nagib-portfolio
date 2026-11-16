import { C as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as SiteHeader } from "./_ssr/site-header-dGXZ66cr.mjs";
import { c as Route$4 } from "./_ssr/router-Br7gxkbg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_projectId-DYWZ4mQ_.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const project = Route$4.useLoaderData();
	const tags = project.tags.split(",").map((tag) => tag.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				hash: "projects",
				className: "text-sm text-teal hover:underline",
				children: "All projects"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-bold",
				children: project.title
			}),
			project.tools ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: project.tools
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg leading-relaxed text-slate-300",
				children: project.summary
			}),
			tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-teal/20 px-3 py-1 text-xs text-teal",
					children: tag
				}, tag))
			}) : null,
			project.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: project.link,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-8 inline-flex rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-copper",
				children: "Open link"
			}) : null
		]
	})] });
}
//#endregion
export { ProjectPage as component };
