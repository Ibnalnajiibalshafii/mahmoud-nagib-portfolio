import { C as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as SiteHeader } from "./_ssr/site-header-dY4FRqPA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-ClyllphC.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
	className: "mx-auto max-w-3xl px-6 py-16",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-3xl font-bold",
		children: "Page not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "mt-4 inline-block text-teal hover:underline",
		children: "Back home"
	})]
})] });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
