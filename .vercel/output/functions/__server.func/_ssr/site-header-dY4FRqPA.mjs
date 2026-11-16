import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Z as require_react, b as Link, p as useRouterState, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as listPages, r as getContact } from "./site-BLBXBSbD.mjs";
import { _ as ChartLine, s as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-dY4FRqPA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "/#about",
		label: "About"
	},
	{
		href: "/#projects",
		label: "Projects"
	},
	{
		href: "/#services",
		label: "Services"
	},
	{
		href: "/#social",
		label: "Social"
	},
	{
		href: "/#contact",
		label: "Contact"
	}
];
var fallbackContact = {
	email: "mahmuodnagib9@gmail.com",
	phone: "+254 745 791 267",
	linkedin: "https://www.linkedin.com/in/mahmoudnagib001",
	location: "Nairobi, Kenya",
	youtube: "https://www.youtube.com/@mahmoudnagibmotivation",
	tiktok: "https://www.tiktok.com/@growwithmahmoud",
	instagram: "https://www.instagram.com/grow.withmahmoud"
};
function SiteHeader({ contact: givenContact, pages: givenPages }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const navigate = useNavigate();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [contact, setContact] = (0, import_react.useState)(givenContact ?? fallbackContact);
	const [pages, setPages] = (0, import_react.useState)(givenPages ?? []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		let alive = true;
		getContact().then((next) => {
			if (alive) setContact(next);
		}).catch(() => {});
		listPages().then((next) => {
			if (alive) setPages(next);
		}).catch(() => {});
		return () => {
			alive = false;
		};
	}, [pathname]);
	function onBrandClick() {
		const bag = window;
		window.clearTimeout(bag.__ownerTimer);
		const next = (bag.__ownerTaps ?? 0) + 1;
		bag.__ownerTaps = next;
		if (next >= 5) {
			bag.__ownerTaps = 0;
			navigate({ to: "/admin" });
			return;
		}
		bag.__ownerTimer = window.setTimeout(() => {
			bag.__ownerTaps = 0;
		}, 8e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-teal/40 bg-paper shadow-[0_10px_30px_rgba(2,6,23,0.45)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-progress",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center gap-3 px-6 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onBrandClick,
						className: "flex items-center gap-3 font-bold text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-copper text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, {
								"aria-hidden": "true",
								className: "size-5"
							})
						}), "Mahmoud Nagib"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "ml-auto hidden items-center gap-8 md:flex",
						children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "text-ink transition hover:text-teal",
							children: link.label
						}, link.href)), pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/p/$slug",
							params: { slug: page.slug },
							className: "text-ink transition hover:text-teal",
							children: page.title
						}, page.slug))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${contact.email}`,
						className: "hidden rounded-full bg-teal px-5 py-2 text-sm font-medium text-white transition hover:bg-copper md:inline-flex",
						children: "Hire me"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto inline-flex min-h-11 min-w-11 items-center justify-center text-ink md:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((value) => !value),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							"aria-hidden": "true",
							className: "size-5"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							"aria-hidden": "true",
							className: "size-5"
						})
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col border-t border-line px-6 py-2 md:hidden",
				children: [
					links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "inline-flex min-h-11 items-center text-ink",
						onClick: () => setOpen(false),
						children: link.label
					}, link.href)),
					pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/p/$slug",
						params: { slug: page.slug },
						className: "inline-flex min-h-11 items-center text-ink",
						onClick: () => setOpen(false),
						children: page.title
					}, page.slug)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${contact.email}`,
						className: "inline-flex min-h-11 items-center text-teal",
						children: "Hire me"
					})
				]
			}) : null
		]
	});
}
//#endregion
export { SiteHeader as t };
