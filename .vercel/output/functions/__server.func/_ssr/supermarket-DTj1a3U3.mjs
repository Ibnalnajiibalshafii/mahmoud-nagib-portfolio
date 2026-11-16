import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteHeader } from "./site-header-dY4FRqPA.mjs";
import { a as pct, i as num, n as Kpi, r as kes, t as AfterMount } from "./format-C2H1w_Y-.mjs";
import { i as Bar, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supermarket-DTj1a3U3.js
var import_jsx_runtime = require_jsx_runtime();
var salesSummary = {
	rows: 120,
	total: 190121.61,
	average: 1584.35,
	min: 72.67,
	q1: 558.08,
	median: 1162.49,
	mean: 1584.35,
	q3: 2462.06,
	max: 5769.68,
	std: 1297.56,
	missingProduct: 2,
	missingUnits: 1
};
var branchSales = [
	{
		branch: "Eldoret",
		sales: 54436.24
	},
	{
		branch: "Nairobi",
		sales: 38168.34
	},
	{
		branch: "Nakuru",
		sales: 35879.33
	},
	{
		branch: "Nyeri",
		sales: 30825.64
	},
	{
		branch: "Mombasa",
		sales: 30812.06
	}
];
var categorySales = [
	{
		category: "Household",
		sales: 58885.52
	},
	{
		category: "Personal Care",
		sales: 56477.99
	},
	{
		category: "Groceries",
		sales: 32348.67
	},
	{
		category: "Beverages",
		sales: 23895.04
	},
	{
		category: "Snacks",
		sales: 18514.39
	}
];
var printedTransactions = [
	{
		id: "TX1001",
		date: "2026-09-07",
		branch: "Nakuru",
		category: "Groceries",
		product: "Cooking Oil",
		units: 13,
		price: 303.95,
		discount: 0,
		sales: 3951.35
	},
	{
		id: "TX1002",
		date: "2026-09-27",
		branch: "Nyeri",
		category: "Personal Care",
		product: "Shampoo",
		units: 14,
		price: 212.19,
		discount: .05,
		sales: 2822.13
	},
	{
		id: "TX1003",
		date: "2026-09-05",
		branch: "Eldoret",
		category: "Personal Care",
		product: "Shampoo",
		units: 4,
		price: 164.18,
		discount: 0,
		sales: 656.72
	},
	{
		id: "TX1004",
		date: "2026-09-30",
		branch: "Nyeri",
		category: "Household",
		product: "Dish Soap",
		units: 14,
		price: 142.11,
		discount: 0,
		sales: 1989.54
	},
	{
		id: "TX1005",
		date: "2026-09-29",
		branch: "Nakuru",
		category: "Household",
		product: "Batteries",
		units: 2,
		price: 224.13,
		discount: 0,
		sales: 448.26
	},
	{
		id: "TX1029",
		date: "2026-09-28",
		branch: "Nairobi",
		category: "Household",
		product: "Batteries",
		units: 14,
		price: 412.12,
		discount: 0,
		sales: 5769.68
	},
	{
		id: "TX1116",
		date: "2026-10-15",
		branch: "Eldoret",
		category: "Household",
		product: "Bleach",
		units: 12,
		price: 314.48,
		discount: .05,
		sales: 3585.07
	},
	{
		id: "TX1117",
		date: "2026-09-07",
		branch: "Nyeri",
		category: "Groceries",
		product: "Flour",
		units: 13,
		price: 93.64,
		discount: .05,
		sales: 1156.45
	},
	{
		id: "TX1118",
		date: "2026-10-11",
		branch: "Nairobi",
		category: "Groceries",
		product: "Cooking Oil",
		units: 1,
		price: 84.9,
		discount: 0,
		sales: 84.9
	},
	{
		id: "TX1119",
		date: "2026-09-05",
		branch: "Eldoret",
		category: "Beverages",
		product: "Juice",
		units: 10,
		price: 139.64,
		discount: 0,
		sales: 1396.4
	},
	{
		id: "TX1120",
		date: "2026-10-04",
		branch: "Nyeri",
		category: "Groceries",
		product: "Flour",
		units: 2,
		price: 233.07,
		discount: 0,
		sales: 466.14
	}
];
var tooltipStyle = {
	background: "var(--color-card)",
	border: "1px solid var(--color-line)",
	color: "var(--color-ink)"
};
var axisTick = {
	fill: "var(--color-ink)",
	fontSize: 12
};
function asNumber(value) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value === "string") {
		const parsed = Number(value);
		return Number.isFinite(parsed) ? parsed : 0;
	}
	return 0;
}
function maxBy(rows, pick) {
	return rows.reduce((best, row) => {
		if (best === void 0 || pick(row) > pick(best)) return row;
		return best;
	}, void 0);
}
function share(part) {
	if (salesSummary.total === 0) return pct(0, 1);
	return pct(part / salesSummary.total * 100, 1);
}
function SupermarketPage() {
	const topBranch = maxBy(branchSales, (row) => row.sales);
	const topCategory = maxBy(categorySales, (row) => row.sales);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rise mx-auto max-w-6xl px-5 pb-24 pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-sm text-muted",
				children: "← Portfolio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs uppercase tracking-widest text-teal",
				children: "Python · pandas · matplotlib · seaborn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-ink sm:text-5xl",
				children: "Supermarket sales"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: [
					num(salesSummary.rows, 0),
					" transactions across ",
					num(branchSales.length, 0),
					" Kenyan branches. Figures below are the submitted analysis. The full CSV was not in the export, so the table is the rows printed in the notebook, not all ",
					num(salesSummary.rows, 0),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Total revenue",
						value: kes(salesSummary.total, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Average ticket",
						value: kes(salesSummary.average, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Top branch",
						value: topBranch?.branch ?? "—",
						note: topBranch ? kes(topBranch.sales, 0) : void 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Top category",
						value: topCategory?.category ?? "—",
						note: topCategory ? kes(topCategory.sales, 0) : void 0
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-ink",
							children: "Sales by branch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterMount, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: branchSales,
									layout: "vertical",
									margin: {
										top: 8,
										right: 8,
										left: 0,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											type: "number",
											tick: axisTick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											type: "category",
											dataKey: "branch",
											width: 88,
											tick: axisTick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: tooltipStyle,
											formatter: (value) => kes(asNumber(value), 0)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "sales",
											fill: "var(--color-teal)",
											radius: 4
										})
									]
								})
							}) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "mt-4 w-full text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "text-left text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 font-normal",
											children: "Branch"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 text-right font-normal",
											children: "Sales"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 text-right font-normal",
											children: "Share"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: branchSales.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-line",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-ink",
											children: row.branch
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums text-ink",
											children: kes(row.sales, 0)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 text-right tabular-nums text-muted",
											children: share(row.sales)
										})
									]
								}, row.branch)) })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-ink",
							children: "Sales by category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterMount, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: categorySales,
									layout: "vertical",
									margin: {
										top: 8,
										right: 8,
										left: 0,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											type: "number",
											tick: axisTick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											type: "category",
											dataKey: "category",
											width: 104,
											tick: axisTick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: tooltipStyle,
											formatter: (value) => kes(asNumber(value), 0)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "sales",
											fill: "var(--color-teal)",
											radius: 4
										})
									]
								})
							}) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "mt-4 w-full text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "text-left text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 font-normal",
											children: "Category"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 text-right font-normal",
											children: "Sales"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 text-right font-normal",
											children: "Share"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: categorySales.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-line",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-ink",
											children: row.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums text-ink",
											children: kes(row.sales, 0)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 text-right tabular-nums text-muted",
											children: share(row.sales)
										})
									]
								}, row.category)) })]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-6 rounded-card bg-teal-deep p-6 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "What the numbers say"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4",
						children: [
							topBranch?.branch ?? "The leading branch",
							" is the highest branch.",
							" ",
							topCategory?.category ?? "The leading category",
							" is the highest category."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: [
							"The distribution is right-skewed: median ",
							kes(salesSummary.median, 0),
							" sits below the mean ",
							kes(salesSummary.mean, 0),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: [
							"The largest ticket is TX1029, Nairobi, batteries, ",
							kes(5769.68, 2),
							" on 2026-09-28."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: [
							"Missing values: ",
							num(salesSummary.missingProduct, 0),
							" product names and",
							" ",
							num(salesSummary.missingUnits, 0),
							" units-sold."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-white/80",
						children: [
							"Min ",
							kes(salesSummary.min, 0),
							" · Q1 ",
							kes(salesSummary.q1, 0),
							" · Median",
							" ",
							kes(salesSummary.median, 0),
							" · Mean ",
							kes(salesSummary.mean, 2),
							" · Q3",
							" ",
							kes(salesSummary.q3, 0),
							" · Max ",
							kes(salesSummary.max, 2)
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-3xl text-ink",
				children: "Rows printed in the notebook"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[48rem] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line text-left text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "Branch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "Product"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 text-right font-normal",
								children: "Units"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 text-right font-normal",
								children: "Price"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 text-right font-normal",
								children: "Discount"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 text-right font-normal",
								children: "Sales"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: printedTransactions.map((row) => {
						const highest = row.id === "TX1029";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: `border-b border-line ${highest ? "text-copper" : "text-ink"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "py-2 pr-3",
									children: [row.id, highest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-xs uppercase tracking-widest",
										children: "highest"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: row.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: row.branch
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: row.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: row.product == null || row.product === "" ? "—" : row.product
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 text-right tabular-nums",
									children: row.units == null ? "—" : num(row.units, 0)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 text-right tabular-nums",
									children: kes(row.price, 2)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 text-right tabular-nums",
									children: pct(row.discount * 100, 1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 text-right tabular-nums",
									children: kes(row.sales, 2)
								})
							]
						}, row.id);
					}) })]
				})
			})
		]
	})] });
}
//#endregion
export { SupermarketPage as component };
