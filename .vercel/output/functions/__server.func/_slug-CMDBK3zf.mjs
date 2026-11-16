import { C as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as SiteHeader } from "./_ssr/site-header-dY4FRqPA.mjs";
import { l as Route$5 } from "./_ssr/router-DAlge_J4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CMDBK3zf.js
var import_jsx_runtime = require_jsx_runtime();
function CustomPage() {
	const page = Route$5.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-sm text-teal hover:underline",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-bold",
				children: page.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 whitespace-pre-wrap text-lg leading-relaxed text-slate-300",
				children: page.body
			})
		]
	})] });
}
//#endregion
export { CustomPage as component };
