import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Z as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteHeader } from "./site-header-dGXZ66cr.mjs";
import { o as branchPerf, s as employees } from "./router-Br7gxkbg.mjs";
import { a as pct, i as num, n as Kpi, r as kes, t as AfterMount } from "./format-C2H1w_Y-.mjs";
import { a as Cell, c as Legend, i as Bar, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bank-kwGtbgLV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tooltipStyle = {
	background: "var(--color-card)",
	border: "1px solid var(--color-line)",
	color: "var(--color-ink)"
};
var axisTick = {
	fill: "var(--color-ink)",
	fontSize: 12
};
var hireYears = [
	"2019",
	"2020",
	"2021",
	"2022",
	"2023",
	"2024"
];
function asNumber(value) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value === "string") {
		const parsed = Number(value);
		return Number.isFinite(parsed) ? parsed : 0;
	}
	return 0;
}
function maxBy(rows, pick) {
	return rows.reduce((best, row) => pick(row) > pick(best) ? row : best);
}
function minBy(rows, pick) {
	return rows.reduce((best, row) => pick(row) < pick(best) ? row : best);
}
function shortName(branch) {
	return branch === "Nairobi Central" ? "Nairobi" : branch;
}
function joinList(items) {
	if (items.length <= 1) return items[0] ?? "";
	if (items.length === 2) return `${items[0]} and ${items[1]}`;
	return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}
function buildBranches() {
	return branchPerf.map((row) => {
		const people = employees.filter((employee) => employee.branch === row.branch);
		const salaryBill = people.reduce((sum, employee) => sum + employee.salary, 0);
		const headcount = people.length;
		return {
			branch: row.branch,
			sales: row.sales,
			profit: row.profit,
			target: row.target,
			payrollBudget: row.payrollBudget,
			csat: row.csat,
			variance: row.sales - row.target,
			achievement: row.target === 0 ? 0 : row.sales / row.target * 100,
			margin: row.sales === 0 ? 0 : row.profit / row.sales * 100,
			payrollRatio: row.profit === 0 ? 0 : row.payrollBudget * 12 / row.profit * 100,
			short: shortName(row.branch),
			salaryBill,
			avgPay: headcount === 0 ? 0 : salaryBill / headcount,
			headcount,
			onLeave: people.filter((employee) => employee.status === "On Leave").length
		};
	});
}
var branches = buildBranches();
var highestSalaryBill = maxBy(branches, (row) => row.salaryBill);
var highestAvgPay = maxBy(branches, (row) => row.avgPay);
var lowestVariance = minBy(branches, (row) => row.variance);
var lowestAchievement = minBy(branches, (row) => row.achievement);
var lowestMargin = minBy(branches, (row) => row.margin);
var highestPayrollRatio = maxBy(branches, (row) => row.payrollRatio);
var lowestCsat = minBy(branches, (row) => row.csat);
var networkSales = branches.reduce((sum, row) => sum + row.sales, 0);
var behindTarget = branches.filter((row) => row.variance < 0).length;
var hiresByYear = hireYears.map((year) => ({
	year,
	hires: employees.filter((employee) => employee.hireDate.startsWith(year)).length
}));
var peakYear = maxBy(hiresByYear, (row) => row.hires);
var peakHires = employees.filter((employee) => employee.hireDate.startsWith(peakYear.year));
var peakBranchCounts = /* @__PURE__ */ new Map();
for (const employee of peakHires) peakBranchCounts.set(employee.branch, (peakBranchCounts.get(employee.branch) ?? 0) + 1);
var peakHireBranch = "";
var peakHireCount = 0;
for (const [branch, count] of peakBranchCounts) if (count > peakHireCount) {
	peakHireBranch = branch;
	peakHireCount = count;
}
function chipClass(active) {
	return active ? "inline-flex min-h-11 items-center rounded-full border border-ink bg-ink px-4 text-paper" : "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-ink";
}
function BankPage() {
	const [branch, setBranch] = (0, import_react.useState)("All");
	const selected = branches.find((row) => row.branch === branch);
	const alsoWorst = [
		lowestAchievement.branch === lowestVariance.branch ? "achievement" : null,
		lowestMargin.branch === lowestVariance.branch ? "margin" : null,
		highestPayrollRatio.branch === lowestVariance.branch ? "payroll ratio" : null,
		lowestCsat.branch === lowestVariance.branch ? "customer satisfaction" : null
	].filter((item) => item !== null);
	const samePay = highestSalaryBill.branch === highestAvgPay.branch;
	const budgetLine = highestSalaryBill.short === "Nairobi" ? `Nairobi monthly budget is ${kes(highestSalaryBill.payrollBudget, 0)} and the Nairobi salary bill is ${kes(highestSalaryBill.salaryBill, 0)}.` : `${highestSalaryBill.branch} monthly budget is ${kes(highestSalaryBill.payrollBudget, 0)} and the salary bill is ${kes(highestSalaryBill.salaryBill, 0)}.`;
	const visibleEmployees = branch === "All" ? employees : employees.filter((employee) => employee.branch === branch);
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
				children: "Excel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-ink sm:text-5xl",
				children: "Bank branches"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Branch sales, profit, targets, payroll budgets, and customer scores from the workbook, set next to the employee list. Variances, margins, and payroll ratios are calculated here, not typed in."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: chipClass(branch === "All"),
					onClick: () => setBranch("All"),
					children: "All"
				}), branchPerf.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: chipClass(branch === row.branch),
					onClick: () => setBranch(row.branch),
					children: row.branch
				}, row.branch))]
			}),
			branch === "All" || selected === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Network sales",
						value: kes(networkSales, 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Behind target",
						value: num(behindTarget, 0),
						note: "Branches with negative variance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Widest gap",
						value: lowestVariance.short,
						note: kes(lowestVariance.variance, 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Payroll pressure",
						value: highestPayrollRatio.short,
						note: pct(highestPayrollRatio.payrollRatio, 1)
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Sales",
						value: kes(selected.sales, 0),
						note: `${num(selected.headcount, 0)} people · ${num(selected.onLeave, 0)} on leave`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Variance",
						value: kes(selected.variance, 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Achievement",
						value: pct(selected.achievement, 1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Margin",
						value: pct(selected.margin, 1)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-ink",
							children: "Sales against target"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterMount, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: branches,
									margin: {
										top: 8,
										right: 8,
										left: 0,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "short",
											tick: axisTick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: axisTick }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: tooltipStyle,
											formatter: (value) => kes(asNumber(value), 0)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "sales",
											name: "Sales",
											fill: "var(--color-teal)",
											radius: 4
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "target",
											name: "Target",
											fill: "var(--color-muted)",
											radius: 4
										})
									]
								})
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-ink",
							children: "Profit margin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterMount, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: branches,
									margin: {
										top: 8,
										right: 8,
										left: 0,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "short",
											tick: axisTick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: axisTick }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: tooltipStyle,
											formatter: (value) => pct(asNumber(value), 1)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "margin",
											name: "Margin",
											radius: 4,
											children: branches.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: row.branch === lowestMargin.branch ? "var(--color-copper)" : "var(--color-teal)" }, row.branch))
										})
									]
								})
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-card p-5 lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-ink",
							children: "Hires by year"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterMount, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: hiresByYear,
									margin: {
										top: 8,
										right: 8,
										left: 0,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "year",
											tick: axisTick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											allowDecimals: false,
											tick: axisTick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: tooltipStyle,
											formatter: (value) => num(asNumber(value), 0)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "hires",
											name: "Hires",
											fill: "var(--color-teal)",
											radius: 4
										})
									]
								})
							}) })
						})]
					})
				]
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
							highestSalaryBill.branch,
							" has the highest salary bill,",
							" ",
							kes(highestSalaryBill.salaryBill, 0),
							" across ",
							num(highestSalaryBill.headcount, 0),
							" ",
							"employees, an average of ",
							kes(highestSalaryBill.avgPay, 0),
							".",
							" ",
							samePay ? "That is also the highest average pay." : `The highest average pay is ${highestAvgPay.branch} at ${kes(highestAvgPay.avgPay, 0)}, so the largest bill and the highest average are not the same branch.`,
							" ",
							"Salary sums differ from the monthly payroll budget used in the ratio. ",
							budgetLine
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: [
							alsoWorst.length > 0 ? `${lowestVariance.branch} is worst on variance and also worst on ${joinList(alsoWorst)}.` : `${lowestVariance.branch} is worst on variance.`,
							" ",
							"Variance ",
							kes(lowestVariance.variance, 0),
							", achievement",
							" ",
							pct(lowestVariance.achievement, 1),
							", margin ",
							pct(lowestVariance.margin, 1),
							", payroll ratio ",
							pct(lowestVariance.payrollRatio, 1),
							", customer satisfaction",
							" ",
							num(lowestVariance.csat, 1),
							" as recorded. Recommend sales and customer-handling training for ",
							lowestVariance.branch,
							". Ask for exit reasons before a final decision. Hire counts ignore people who left and whether new hires perform. ",
							peakYear.year,
							" was the peak hiring year",
							peakHireBranch === "" ? "." : `, and ${peakHireBranch} hired the most that year (${num(peakHireCount, 0)}).`,
							" ",
							"A peak year, and that branch, can still miss target."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-white/80",
						children: "Customer satisfaction scores are shown as recorded in the workbook; they are above 100, so they are not a 0–100 percent."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-3xl text-ink",
				children: branch === "All" ? "Employees" : branch
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
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "Branch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "Position"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-normal",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 text-right font-normal",
								children: "Salary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 text-right font-normal",
								children: "Hire year"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: visibleEmployees.map((employee) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: employee.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: employee.branch
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: employee.position
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: employee.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `py-2 pr-3 ${employee.status === "On Leave" ? "text-copper" : ""}`,
								children: employee.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3 text-right tabular-nums",
								children: kes(employee.salary, 0)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 text-right tabular-nums",
								children: employee.hireDate.slice(0, 4)
							})
						]
					}, employee.id)) })]
				})
			})
		]
	})] });
}
//#endregion
export { BankPage as component };
