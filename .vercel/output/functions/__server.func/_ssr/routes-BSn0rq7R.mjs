import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Z as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ShoppingCart, c as MapPin, d as Lightbulb, f as GraduationCap, g as ChartColumn, h as ChartPie, i as Table2, l as Mail, m as Database, n as University, o as Phone, p as FolderKanban, u as Linkedin } from "../_libs/lucide-react.mjs";
import { t as SiteHeader } from "./site-header-dGXZ66cr.mjs";
import { d as Route$8 } from "./router-Br7gxkbg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BSn0rq7R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroPose = {
	camX: .1,
	camY: .38,
	camZ: 4.5,
	rotY: .45,
	rotX: .16,
	focusX: 2.15
};
function SceneBackdrop() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		let alive = true;
		let destroy = () => {};
		(async () => {
			const THREE = await import("../_libs/three.mjs").then((n) => n.n);
			const { RoomEnvironment } = await import("../_libs/three.mjs").then((n) => n.t);
			const gsap = (await import("../_libs/gsap.mjs").then((n) => n.t)).default;
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			const { default: Lenis } = await import("../_libs/lenis.mjs").then((n) => n.t);
			if (!alive) return;
			gsap.registerPlugin(ScrollTrigger);
			const renderer = new THREE.WebGLRenderer({
				canvas,
				antialias: true,
				alpha: false,
				powerPreference: "high-performance"
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
			renderer.setSize(window.innerWidth, window.innerHeight, false);
			renderer.outputColorSpace = THREE.SRGBColorSpace;
			renderer.toneMapping = THREE.ACESFilmicToneMapping;
			renderer.toneMappingExposure = 1.12;
			renderer.setClearColor(725536, 1);
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 40);
			const pmrem = new THREE.PMREMGenerator(renderer);
			scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
			scene.add(new THREE.AmbientLight(14412542, .35));
			const key = new THREE.DirectionalLight(16777215, 2.4);
			key.position.set(4.5, 6.2, 5);
			scene.add(key);
			const rim = new THREE.DirectionalLight(440020, 2.1);
			rim.position.set(-5, 2.2, -3);
			scene.add(rim);
			const fill = new THREE.PointLight(3003583, 8, 12);
			fill.position.set(0, 1.2, 2.4);
			scene.add(fill);
			const rig = new THREE.Group();
			scene.add(rig);
			const glass = new THREE.MeshPhysicalMaterial({
				color: 10217471,
				metalness: 0,
				roughness: .08,
				transmission: .72,
				thickness: 1.1,
				ior: 1.4,
				transparent: true,
				emissive: 947344,
				emissiveIntensity: .22,
				envMapIntensity: 1.4
			});
			const metal = new THREE.MeshStandardMaterial({
				color: 12965096,
				metalness: 1,
				roughness: .18
			});
			const accent = new THREE.MeshStandardMaterial({
				color: 2282478,
				metalness: .7,
				roughness: .2,
				emissive: 440020,
				emissiveIntensity: .85
			});
			const core = new THREE.Mesh(new THREE.IcosahedronGeometry(.82, 1), glass);
			core.position.y = .55;
			rig.add(core);
			const shard = new THREE.Mesh(new THREE.OctahedronGeometry(.28, 0), glass);
			shard.position.set(-.95, 1.15, .35);
			rig.add(shard);
			const ring = new THREE.Mesh(new THREE.TorusGeometry(1.85, .045, 24, 100), accent);
			ring.rotation.x = Math.PI / 2.35;
			ring.position.y = .45;
			rig.add(ring);
			[
				.55,
				.85,
				1.2,
				1.75,
				1.05,
				.7,
				1.35
			].forEach((height, index) => {
				const bar = new THREE.Mesh(new THREE.BoxGeometry(.2, height, .2), index === 3 ? accent : metal);
				bar.position.set((index - 3) * .36, height / 2 - .15, 1.05);
				rig.add(bar);
			});
			const base = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.68, .08, 48), metal);
			base.position.y = -.22;
			rig.add(base);
			const points = new THREE.Group();
			for (let index = 0; index < 14; index += 1) {
				const dot = new THREE.Mesh(new THREE.SphereGeometry(.055, 16, 16), accent);
				const angle = index / 14 * Math.PI * 2;
				dot.position.set(Math.cos(angle) * 2.15, Math.sin(angle * 2) * .42 + .45, Math.sin(angle) * 2.15);
				points.add(dot);
			}
			rig.add(points);
			const count = window.innerWidth < 768 ? 180 : 460;
			const seeds = new Float32Array(count * 3);
			const phases = new Float32Array(count);
			const positions = new Float32Array(count * 3);
			for (let index = 0; index < count; index += 1) {
				const radius = 2.2 + Math.random() * 7.2;
				const theta = Math.random() * Math.PI * 2;
				const y = (Math.random() - .5) * 7.5;
				seeds[index * 3] = Math.cos(theta) * radius;
				seeds[index * 3 + 1] = y;
				seeds[index * 3 + 2] = Math.sin(theta) * radius * (.55 + Math.random() * .7);
				phases[index] = Math.random() * Math.PI * 2;
			}
			positions.set(seeds);
			const particleGeo = new THREE.BufferGeometry();
			particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
			const particleMat = new THREE.PointsMaterial({
				color: 6809849,
				size: window.innerWidth < 768 ? .055 : .07,
				transparent: true,
				opacity: .75,
				depthWrite: false,
				blending: THREE.AdditiveBlending,
				sizeAttenuation: true
			});
			const dust = new THREE.Points(particleGeo, particleMat);
			scene.add(dust);
			const flow = { progress: 0 };
			const state = { ...heroPose };
			const pointer = {
				x: 0,
				y: 0
			};
			const smooth = {
				x: 0,
				y: 0
			};
			const narrow = () => window.innerWidth < 768;
			const fit = () => {
				const width = window.innerWidth;
				const height = window.innerHeight;
				camera.aspect = width / Math.max(height, 1);
				camera.updateProjectionMatrix();
				renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
				renderer.setSize(width, height, false);
				rig.scale.setScalar(narrow() ? .58 : 1.35);
			};
			fit();
			const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			let lenis = null;
			const tickers = [];
			if (!reduce) {
				lenis = new Lenis({
					lerp: .085,
					smoothWheel: true
				});
				lenis.on("scroll", ScrollTrigger.update);
				const onTick = (time) => {
					lenis?.raf(time * 1e3);
				};
				tickers.push(onTick);
				gsap.ticker.add(onTick);
				gsap.ticker.lagSmoothing(0);
				document.documentElement.classList.add("lenis");
				const timeline = gsap.timeline({
					defaults: {
						ease: "none",
						duration: 1
					},
					scrollTrigger: {
						trigger: "#hero",
						start: "top top",
						endTrigger: "#footer",
						end: "bottom bottom",
						scrub: .7
					}
				});
				timeline.to(state, {
					camX: -1.6,
					camY: .7,
					camZ: 4.8,
					rotY: 1.35,
					rotX: .24,
					focusX: 1.1
				}).to(state, {
					camX: .2,
					camY: .15,
					camZ: 3.3,
					rotY: 2.35,
					rotX: -.04,
					focusX: .35
				}).to(state, {
					camX: 1.8,
					camY: .95,
					camZ: 5.1,
					rotY: 3.2,
					rotX: .28,
					focusX: 1.4
				}).to(state, {
					camX: .2,
					camY: .55,
					camZ: 6.2,
					rotY: 4.2,
					rotX: .08,
					focusX: 2.3
				});
				timeline.to(flow, {
					progress: 1,
					duration: 4
				}, 0);
				requestAnimationFrame(() => ScrollTrigger.refresh());
			}
			const onMove = (event) => {
				pointer.x = event.clientX / window.innerWidth * 2 - 1;
				pointer.y = event.clientY / window.innerHeight * 2 - 1;
			};
			window.addEventListener("pointermove", onMove);
			window.addEventListener("resize", fit);
			const clock = new THREE.Clock();
			renderer.setAnimationLoop(() => {
				const t = clock.getElapsedTime();
				smooth.x += (pointer.x - smooth.x) * .06;
				smooth.y += (pointer.y - smooth.y) * .06;
				const mobile = narrow();
				const parallax = mobile ? .12 : .28;
				camera.position.set(state.camX + smooth.x * parallax, state.camY + smooth.y * -.18, state.camZ + (mobile ? 2.2 : 0));
				camera.lookAt(0, .45, 0);
				rig.position.x = mobile ? 0 : state.focusX;
				rig.position.y = Math.sin(t * 1.35) * .2;
				rig.rotation.y = state.rotY + smooth.x * .4 + t * .22;
				rig.rotation.x = state.rotX + Math.sin(t * .9) * .08 + smooth.y * .12;
				points.rotation.y = t * .45;
				const progress = flow.progress;
				const swirl = progress * Math.PI * 3.4 + t * .45;
				const spread = 1 + progress * .55;
				const attr = particleGeo.getAttribute("position");
				const coords = attr.array;
				for (let index = 0; index < count; index += 1) {
					const i3 = index * 3;
					const phase = phases[index] ?? 0;
					const x = seeds[i3] ?? 0;
					const y = seeds[i3 + 1] ?? 0;
					const z = seeds[i3 + 2] ?? 0;
					const turn = swirl + phase * .05;
					const cos = Math.cos(turn);
					const sin = Math.sin(turn);
					coords[i3] = (x * cos - z * sin) * spread;
					coords[i3 + 1] = y + Math.sin(t * .55 + phase) * .18 + progress * Math.sin(phase) * 1.4;
					coords[i3 + 2] = (x * sin + z * cos) * spread;
				}
				attr.needsUpdate = true;
				particleMat.opacity = .4 + progress * .5;
				particleMat.color.setHex(progress > .55 ? 3003583 : 6809849);
				renderer.render(scene, camera);
			});
			destroy = () => {
				renderer.setAnimationLoop(null);
				window.removeEventListener("pointermove", onMove);
				window.removeEventListener("resize", fit);
				tickers.forEach((fn) => gsap.ticker.remove(fn));
				lenis?.destroy();
				document.documentElement.classList.remove("lenis");
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
				scene.traverse((object) => {
					const mesh = object;
					if (mesh.geometry) mesh.geometry.dispose();
					const material = mesh.material;
					if (Array.isArray(material)) material.forEach((item) => item.dispose());
					else if (material) material.dispose();
				});
				pmrem.dispose();
				renderer.dispose();
			};
		})();
		return () => {
			alive = false;
			destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "scene-canvas",
		"aria-hidden": "true"
	});
}
function scaleFor(progress, first) {
	if (first) {
		if (progress < .55) return 1;
		return 1 - (progress - .55) / .45 * .04;
	}
	if (progress < .4) return 1.05 - progress / .4 * .05;
	if (progress > .7) return 1 - (progress - .7) / .3 * .04;
	return 1;
}
function SectionZoom() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let alive = true;
		let cleanup = () => {};
		(async () => {
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			const gsap = (await import("../_libs/gsap.mjs").then((n) => n.t)).default;
			if (!alive) return;
			gsap.registerPlugin(ScrollTrigger);
			const sections = Array.from(document.querySelectorAll(".zoom-section"));
			const triggers = sections.map((section, index) => ScrollTrigger.create({
				trigger: section,
				start: "top bottom",
				end: "bottom top",
				scrub: .8,
				onUpdate: (self) => {
					const scale = scaleFor(self.progress, index === 0);
					section.style.transform = scale === 1 ? "" : `scale(${scale})`;
				}
			}));
			requestAnimationFrame(() => ScrollTrigger.refresh());
			cleanup = () => {
				triggers.forEach((trigger) => trigger.kill());
				sections.forEach((section) => {
					section.style.transform = "";
					section.style.filter = "";
				});
			};
		})();
		return () => {
			alive = false;
			cleanup();
		};
	}, []);
	return null;
}
var projects = [
	{
		to: "/work/supermarket",
		title: "Supermarket Sales Analytics",
		meta: "Python • Pandas • Matplotlib • Seaborn",
		copy: "Analyzed 120 supermarket transactions across 5 Kenyan branches. Total revenue KES 190,122. Eldoret led the branches and Household led the categories.",
		tags: [
			"Data Cleaning",
			"Aggregation",
			"Visualization"
		],
		tint: "from-cyan-900 to-blue-900",
		tag: "bg-teal/20 text-teal",
		icon: ShoppingCart
	},
	{
		to: "/work/bank",
		title: "Bank Branch Performance",
		meta: "Excel • PivotTables • Formulas • Analysis",
		copy: "Five branches, 50 employees. Nakuru missed its sales target by KES 600,000 and has the lowest customer score.",
		tags: [
			"Excel",
			"KPI Analysis",
			"Recommendations"
		],
		tint: "from-teal-900 to-cyan-900",
		tag: "bg-copper/20 text-copper",
		icon: University
	},
	{
		to: "/work/students",
		title: "Student Performance Analysis",
		meta: "Data Cleaning • Scoring • Grading",
		copy: "Eighty students across four forms. Totals, averages, and grades, including a gender field that contradicts the names.",
		tags: [
			"Data Quality",
			"Scoring",
			"Reporting"
		],
		tint: "from-indigo-900 to-purple-900",
		tag: "bg-indigo-400/20 text-indigo-300",
		icon: GraduationCap
	}
];
function Home() {
	const data = Route$8.useLoaderData();
	const custom = data.projects;
	const contact = data.contact;
	const portrait = data.portrait || "/portrait.jpg";
	const socials = [
		{
			href: contact.youtube,
			label: "YouTube",
			kind: "youtube"
		},
		{
			href: contact.tiktok,
			label: "TikTok",
			kind: "tiktok"
		},
		{
			href: contact.instagram,
			label: "Instagram",
			kind: "instagram"
		}
	].filter((item) => item.href);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneBackdrop, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionZoom, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {
			contact,
			pages: data.pages
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "page-layer",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "hero",
					className: "zoom-section hero-stage relative overflow-hidden py-24 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-grid",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "orb orb-a",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "orb orb-b",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "drift relative mx-auto max-w-3xl px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "hero-in mb-4 font-medium text-teal",
									children: ["Junior Data Analyst • ", contact.location]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "hero-in hero-in-2 mb-6 text-5xl font-bold leading-tight md:text-6xl",
									children: [
										"Turning Data Into",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shine bg-gradient-to-r from-teal to-copper bg-clip-text text-transparent",
											children: "Clear Insights"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hero-in hero-in-3 mb-8 max-w-xl text-lg text-slate-300",
									children: "I help businesses make smarter decisions through data cleaning, analysis, visualization, and actionable reporting. Open a project to see its dashboard."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-in hero-in-4 flex flex-wrap gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#projects",
										className: "rounded-full bg-teal px-8 py-3 font-medium text-white transition hover:bg-copper",
										children: "View Projects"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: "rounded-full border border-teal px-8 py-3 font-medium text-teal transition hover:bg-teal hover:text-white",
										children: "Get in Touch"
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "about",
					className: "zoom-section section-glass py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm font-medium uppercase tracking-[0.2em] text-teal",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-center text-4xl font-bold",
								children: "About Me"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel rise mt-12 overflow-hidden rounded-3xl md:grid md:grid-cols-[17rem_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center bg-gradient-to-b from-teal/25 via-teal/10 to-transparent px-8 py-10 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: portrait,
											alt: "Mahmoud Nagib",
											className: "portrait-pop size-44 rounded-full object-cover shadow-2xl ring-4 ring-teal"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 text-2xl font-bold",
											children: "Mahmoud Nagib"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-teal",
											children: "Junior Data Analyst"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 inline-flex items-center gap-2 text-sm text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												"aria-hidden": "true",
												className: "size-4 text-teal"
											}), contact.location]
										}),
										socials.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 flex gap-3",
											children: socials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: item.href,
												target: "_blank",
												rel: "noreferrer",
												"aria-label": item.label,
												className: "transition hover:scale-105",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, { kind: item.kind })
											}, item.kind))
										}) : null
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-line p-8 md:border-t-0 md:border-l md:p-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg leading-relaxed text-slate-300",
											children: data.about.lead
										}),
										data.about.more ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-lg leading-relaxed text-slate-300",
											children: data.about.more
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
											children: data.skills.map((item, index) => {
												const Icon = [
													ChartColumn,
													Table2,
													Database,
													ChartPie,
													Lightbulb
												][index % 5];
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "panel rise skill-tile card-lift rounded-2xl",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start gap-3 p-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
															"aria-hidden": "true",
															className: "mt-0.5 size-5 shrink-0 text-teal"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-semibold",
															children: item.label
														}), item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm text-muted",
															children: item.note
														}) : null] })]
													})
												}, item.id);
											})
										})
									]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "projects",
					className: "zoom-section section-glass py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "rise mb-4 text-center text-4xl font-bold",
								children: "Featured Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-12 text-center text-muted",
								children: "Three analyses, each with a live dashboard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 md:grid-cols-3",
								children: [projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: project.to,
									className: "rise project-card block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "panel card-lift overflow-hidden rounded-2xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `flex h-48 items-center justify-center bg-gradient-to-br ${project.tint}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(project.icon, {
												"aria-hidden": "true",
												className: "size-16 text-white/40"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mb-2 text-xl font-bold",
													children: project.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mb-4 text-sm text-muted",
													children: project.meta
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mb-4 text-slate-300",
													children: project.copy
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-wrap gap-2",
													children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `rounded-full px-3 py-1 text-xs ${project.tag}`,
														children: tag
													}, tag))
												})
											]
										})]
									})
								}, project.to)), custom.map((project, index) => {
									const tags = project.tags.split(",").map((tag) => tag.trim()).filter(Boolean);
									const tint = [
										"from-cyan-900 to-blue-900",
										"from-teal-900 to-cyan-900",
										"from-indigo-900 to-purple-900"
									][index % 3];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/projects/$projectId",
										params: { projectId: String(project.id) },
										className: "rise project-card block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "panel card-lift overflow-hidden rounded-2xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `flex h-48 items-center justify-center bg-gradient-to-br ${tint}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, {
													"aria-hidden": "true",
													className: "size-16 text-white/40"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mb-2 text-xl font-bold",
														children: project.title
													}),
													project.tools ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mb-4 text-sm text-muted",
														children: project.tools
													}) : null,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mb-4 text-slate-300",
														children: project.summary
													}),
													tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex flex-wrap gap-2",
														children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-teal/20 px-3 py-1 text-xs text-teal",
															children: tag
														}, tag))
													}) : null
												]
											})]
										})
									}, project.id);
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "services",
					className: "zoom-section section-glass py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "rise mb-12 text-center text-4xl font-bold",
							children: "Services I Offer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 md:grid-cols-3",
							children: [
								{
									title: "Data Cleaning & Preparation",
									copy: "Clean messy datasets, handle missing values, standardize formats, and prepare data for analysis."
								},
								{
									title: "Analysis & Visualization",
									copy: "Descriptive analysis, KPIs, charts, and dashboards in Python or Excel that tell a clear story."
								},
								{
									title: "Reporting & Insights",
									copy: "Written findings, the figures behind them, and a recommendation you can act on."
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "rise",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "panel card-lift h-full rounded-2xl p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-3 text-xl font-bold",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted",
										children: item.copy
									})]
								})
							}, item.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "social",
					className: "zoom-section section-glass py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium uppercase tracking-[0.2em] text-teal",
								children: "Social"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-4xl font-bold",
								children: "Find me online"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap items-center justify-center gap-8",
								children: socials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: item.href,
									target: "_blank",
									rel: "noreferrer",
									className: "group flex flex-col items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
										kind: item.kind,
										large: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-slate-300 group-hover:text-teal",
										children: item.label
									})]
								}, item.kind))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "contact",
					className: "zoom-section section-glass py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-4xl font-bold",
								children: "Let's Work Together"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-8 text-lg text-muted",
								children: "Open to data analysis work. Reach out and tell me what you need looked at."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel rise inline-block rounded-2xl p-8 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "mb-4 flex items-center gap-3 text-lg text-teal hover:underline",
										href: `mailto:${contact.email}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											"aria-hidden": "true",
											className: "size-5 shrink-0"
										}), contact.email]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "mb-4 flex items-center gap-3 text-lg text-teal hover:underline",
										href: `tel:${contact.phone.replace(/[^\d+]/g, "")}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											"aria-hidden": "true",
											className: "size-5 shrink-0"
										}), contact.phone]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "mb-4 flex items-center gap-3 text-lg text-teal hover:underline",
										href: contact.linkedin,
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
											"aria-hidden": "true",
											className: "size-5 shrink-0"
										}), "LinkedIn"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-3 text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											"aria-hidden": "true",
											className: "size-5 shrink-0 text-teal"
										}), contact.location]
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					id: "footer",
					className: "section-glass border-t border-line py-8 text-center text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Mahmoud Nagib. Junior Data Analyst Portfolio." })
				})
			]
		})
	] });
}
function SocialIcon({ kind, large = false }) {
	const size = large ? "size-16" : "size-11";
	if (kind === "youtube") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex ${size} items-center justify-center rounded-2xl bg-[#ff0033] text-white shadow-lg`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: large ? "size-8" : "size-6",
			"aria-hidden": "true",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z" })
		})
	});
	if (kind === "tiktok") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex ${size} items-center justify-center rounded-2xl bg-black text-white shadow-lg ring-1 ring-white/20`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: large ? "size-8" : "size-6",
			"aria-hidden": "true",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.5 3c.4 2.4 1.8 4.1 4.1 4.4v2.6c-1.4 0-2.7-.4-3.9-1.2v6.5c0 3.4-2.6 6.2-6.1 6.2S2.5 18.7 2.5 15.3c0-3.3 2.6-6 5.9-6.2v2.7c-1.7.2-3 1.6-3 3.4 0 1.9 1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4V3h2.3z" })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex ${size} items-center justify-center rounded-2xl text-white shadow-lg`,
		style: { background: "radial-gradient(circle at 30% 110%, #feda75, #fa7e1e 35%, #d62976 60%, #962fbf 80%, #4f5bd5)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: large ? "size-8" : "size-6",
			"aria-hidden": "true",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "4",
					y: "4",
					width: "16",
					height: "16",
					rx: "5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "3.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "17.2",
					cy: "6.8",
					r: "0.8",
					fill: "currentColor",
					stroke: "none"
				})
			]
		})
	});
}
//#endregion
export { Home as component };
