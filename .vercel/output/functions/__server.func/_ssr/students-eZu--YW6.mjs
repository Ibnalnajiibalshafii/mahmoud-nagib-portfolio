import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Z as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as ArrowUp, y as ArrowDown } from "../_libs/lucide-react.mjs";
import { t as SiteHeader } from "./site-header-dY4FRqPA.mjs";
import { i as num, n as Kpi, t as AfterMount } from "./format-C2H1w_Y-.mjs";
import { i as Bar, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/students-eZu--YW6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var students = [
	{
		id: "STU001",
		name: "Brian Otieno",
		gender: "Male",
		form: 1,
		math: 60,
		english: 61,
		science: 48,
		ict: 42,
		attendance: 61,
		grade: "D",
		total: 211,
		average: 52.75
	},
	{
		id: "STU002",
		name: "Mary Njeri",
		gender: "Male",
		form: 4,
		math: 29,
		english: 33,
		science: 31,
		ict: 52,
		attendance: 69,
		grade: "E",
		total: 145,
		average: 36.25
	},
	{
		id: "STU003",
		name: "Kevin Mutua",
		gender: "Male",
		form: 2,
		math: 94,
		english: 83,
		science: 48,
		ict: 82,
		attendance: 92,
		grade: "B",
		total: 307,
		average: 76.75
	},
	{
		id: "STU004",
		name: "Faith Atieno",
		gender: "Female",
		form: 1,
		math: 45,
		english: 84,
		science: 63,
		ict: 60,
		attendance: 64,
		grade: "C",
		total: 252,
		average: 63
	},
	{
		id: "STU005",
		name: "Daniel Maina",
		gender: "Male",
		form: 3,
		math: 38,
		english: 41,
		science: 68,
		ict: 37,
		attendance: 77,
		grade: "E",
		total: 184,
		average: 46
	},
	{
		id: "STU006",
		name: "Grace Adhiambo",
		gender: "Female",
		form: 3,
		math: 30,
		english: 88,
		science: 88,
		ict: 40,
		attendance: 79,
		grade: "C",
		total: 246,
		average: 61.5
	},
	{
		id: "STU007",
		name: "Peter Kamau",
		gender: "Male",
		form: 3,
		math: 71,
		english: 54,
		science: 28,
		ict: 30,
		attendance: 97,
		grade: "E",
		total: 183,
		average: 45.75
	},
	{
		id: "STU008",
		name: "Ann Achieng",
		gender: "Male",
		form: 3,
		math: 35,
		english: 59,
		science: 32,
		ict: 73,
		attendance: 72,
		grade: "E",
		total: 199,
		average: 49.75
	},
	{
		id: "STU009",
		name: "David Kiptoo",
		gender: "Female",
		form: 3,
		math: 45,
		english: 77,
		science: 65,
		ict: 51,
		attendance: 97,
		grade: "D",
		total: 238,
		average: 59.5
	},
	{
		id: "STU010",
		name: "Mercy Muthoni",
		gender: "Female",
		form: 1,
		math: 46,
		english: 98,
		science: 51,
		ict: 45,
		attendance: 84,
		grade: "C",
		total: 240,
		average: 60
	},
	{
		id: "STU011",
		name: "James Kariuki",
		gender: "Female",
		form: 3,
		math: 96,
		english: 58,
		science: 61,
		ict: 32,
		attendance: 69,
		grade: "C",
		total: 247,
		average: 61.75
	},
	{
		id: "STU012",
		name: "Lydia Nyambura",
		gender: "Male",
		form: 3,
		math: 76,
		english: 64,
		science: 28,
		ict: 52,
		attendance: 91,
		grade: "D",
		total: 220,
		average: 55
	},
	{
		id: "STU013",
		name: "Samuel Kibet",
		gender: "Female",
		form: 2,
		math: 88,
		english: 80,
		science: 78,
		ict: 43,
		attendance: 71,
		grade: "B",
		total: 289,
		average: 72.25
	},
	{
		id: "STU014",
		name: "Joy Wanjiku",
		gender: "Male",
		form: 2,
		math: 96,
		english: 98,
		science: 53,
		ict: 99,
		attendance: 82,
		grade: "A",
		total: 346,
		average: 86.5
	},
	{
		id: "STU015",
		name: "Michael Mwangi",
		gender: "Female",
		form: 3,
		math: 53,
		english: 47,
		science: 85,
		ict: 88,
		attendance: 60,
		grade: "C",
		total: 273,
		average: 68.25
	},
	{
		id: "STU016",
		name: "Esther Chebet",
		gender: "Male",
		form: 1,
		math: 44,
		english: 50,
		science: 74,
		ict: 33,
		attendance: 79,
		grade: "D",
		total: 201,
		average: 50.25
	},
	{
		id: "STU017",
		name: "Joseph Omondi",
		gender: "Female",
		form: 4,
		math: 92,
		english: 62,
		science: 90,
		ict: 26,
		attendance: 98,
		grade: "C",
		total: 270,
		average: 67.5
	},
	{
		id: "STU018",
		name: "Nancy Wambui",
		gender: "Male",
		form: 3,
		math: 68,
		english: 44,
		science: 57,
		ict: 80,
		attendance: 65,
		grade: "C",
		total: 249,
		average: 62.25
	},
	{
		id: "STU019",
		name: "Paul Kimani",
		gender: "Female",
		form: 1,
		math: 58,
		english: 94,
		science: 42,
		ict: 89,
		attendance: 61,
		grade: "B",
		total: 283,
		average: 70.75
	},
	{
		id: "STU020",
		name: "Alice Wairimu",
		gender: "Female",
		form: 2,
		math: 44,
		english: 77,
		science: 40,
		ict: 94,
		attendance: 88,
		grade: "C",
		total: 255,
		average: 63.75
	},
	{
		id: "STU021",
		name: "John Otieno",
		gender: "Male",
		form: 3,
		math: 87,
		english: 32,
		science: 34,
		ict: 71,
		attendance: 74,
		grade: "D",
		total: 224,
		average: 56
	},
	{
		id: "STU022",
		name: "Ruth Njeri",
		gender: "Male",
		form: 1,
		math: 55,
		english: 40,
		science: 30,
		ict: 87,
		attendance: 59,
		grade: "D",
		total: 212,
		average: 53
	},
	{
		id: "STU023",
		name: "Dennis Mutua",
		gender: "Male",
		form: 2,
		math: 85,
		english: 100,
		science: 41,
		ict: 58,
		attendance: 88,
		grade: "B",
		total: 284,
		average: 71
	},
	{
		id: "STU024",
		name: "Sharon Atieno",
		gender: "Female",
		form: 2,
		math: 94,
		english: 55,
		science: 59,
		ict: 76,
		attendance: 97,
		grade: "B",
		total: 284,
		average: 71
	},
	{
		id: "STU025",
		name: "Victor Maina",
		gender: "Female",
		form: 4,
		math: 91,
		english: 87,
		science: 35,
		ict: 56,
		attendance: 69,
		grade: "C",
		total: 269,
		average: 67.25
	},
	{
		id: "STU026",
		name: "Cynthia Adhiambo",
		gender: "Male",
		form: 3,
		math: 27,
		english: 100,
		science: 49,
		ict: 100,
		attendance: 69,
		grade: "C",
		total: 276,
		average: 69
	},
	{
		id: "STU027",
		name: "Eric Kamau",
		gender: "Male",
		form: 1,
		math: 32,
		english: 59,
		science: 28,
		ict: 29,
		attendance: 76,
		grade: "E",
		total: 148,
		average: 37
	},
	{
		id: "STU028",
		name: "Beatrice Achieng",
		gender: "Male",
		form: 2,
		math: 60,
		english: 92,
		science: 47,
		ict: 94,
		attendance: 63,
		grade: "B",
		total: 293,
		average: 73.25
	},
	{
		id: "STU029",
		name: "Collins Kiptoo",
		gender: "Female",
		form: 2,
		math: 85,
		english: 82,
		science: 44,
		ict: 37,
		attendance: 61,
		grade: "C",
		total: 248,
		average: 62
	},
	{
		id: "STU030",
		name: "Diana Muthoni",
		gender: "Female",
		form: 3,
		math: 79,
		english: 82,
		science: 79,
		ict: 31,
		attendance: 98,
		grade: "C",
		total: 271,
		average: 67.75
	},
	{
		id: "STU031",
		name: "George Kariuki",
		gender: "Male",
		form: 1,
		math: 76,
		english: 73,
		science: 33,
		ict: 56,
		attendance: 67,
		grade: "D",
		total: 238,
		average: 59.5
	},
	{
		id: "STU032",
		name: "Irene Nyambura",
		gender: "Male",
		form: 4,
		math: 42,
		english: 84,
		science: 43,
		ict: 60,
		attendance: 84,
		grade: "D",
		total: 229,
		average: 57.25
	},
	{
		id: "STU033",
		name: "Martin Kibet",
		gender: "Male",
		form: 1,
		math: 81,
		english: 100,
		science: 32,
		ict: 31,
		attendance: 96,
		grade: "C",
		total: 244,
		average: 61
	},
	{
		id: "STU034",
		name: "Susan Wanjiku",
		gender: "Male",
		form: 1,
		math: 55,
		english: 51,
		science: 72,
		ict: 87,
		attendance: 85,
		grade: "C",
		total: 265,
		average: 66.25
	},
	{
		id: "STU035",
		name: "Felix Mwangi",
		gender: "Male",
		form: 4,
		math: 32,
		english: 51,
		science: 68,
		ict: 25,
		attendance: 79,
		grade: "E",
		total: 176,
		average: 44
	},
	{
		id: "STU036",
		name: "Agnes Chebet",
		gender: "Female",
		form: 4,
		math: 61,
		english: 84,
		science: 91,
		ict: 87,
		attendance: 64,
		grade: "A",
		total: 323,
		average: 80.75
	},
	{
		id: "STU037",
		name: "Patrick Omondi",
		gender: "Male",
		form: 3,
		math: 52,
		english: 37,
		science: 94,
		ict: 94,
		attendance: 58,
		grade: "C",
		total: 277,
		average: 69.25
	},
	{
		id: "STU038",
		name: "Caroline Wambui",
		gender: "Female",
		form: 1,
		math: 31,
		english: 91,
		science: 84,
		ict: 92,
		attendance: 65,
		grade: "B",
		total: 298,
		average: 74.5
	},
	{
		id: "STU039",
		name: "Robert Kimani",
		gender: "Male",
		form: 1,
		math: 48,
		english: 38,
		science: 96,
		ict: 33,
		attendance: 98,
		grade: "D",
		total: 215,
		average: 53.75
	},
	{
		id: "STU040",
		name: "Janet Wairimu",
		gender: "Male",
		form: 4,
		math: 40,
		english: 61,
		science: 94,
		ict: 30,
		attendance: 94,
		grade: "D",
		total: 225,
		average: 56.25
	},
	{
		id: "STU041",
		name: "Brian Otieno",
		gender: "Male",
		form: 4,
		math: 99,
		english: 96,
		science: 60,
		ict: 58,
		attendance: 68,
		grade: "B",
		total: 313,
		average: 78.25
	},
	{
		id: "STU042",
		name: "Mary Njeri",
		gender: "Female",
		form: 2,
		math: 58,
		english: 80,
		science: 36,
		ict: 63,
		attendance: 84,
		grade: "D",
		total: 237,
		average: 59.25
	},
	{
		id: "STU043",
		name: "Kevin Mutua",
		gender: "Female",
		form: 1,
		math: 26,
		english: 88,
		science: 99,
		ict: 97,
		attendance: 61,
		grade: "B",
		total: 310,
		average: 77.5
	},
	{
		id: "STU044",
		name: "Faith Atieno",
		gender: "Male",
		form: 2,
		math: 89,
		english: 63,
		science: 36,
		ict: 69,
		attendance: 59,
		grade: "C",
		total: 257,
		average: 64.25
	},
	{
		id: "STU045",
		name: "Daniel Maina",
		gender: "Male",
		form: 3,
		math: 61,
		english: 50,
		science: 76,
		ict: 94,
		attendance: 100,
		grade: "B",
		total: 281,
		average: 70.25
	},
	{
		id: "STU046",
		name: "Grace Adhiambo",
		gender: "Female",
		form: 1,
		math: 95,
		english: 68,
		science: 33,
		ict: 42,
		attendance: 71,
		grade: "D",
		total: 238,
		average: 59.5
	},
	{
		id: "STU047",
		name: "Peter Kamau",
		gender: "Male",
		form: 1,
		math: 95,
		english: 49,
		science: 54,
		ict: 61,
		attendance: 93,
		grade: "C",
		total: 259,
		average: 64.75
	},
	{
		id: "STU048",
		name: "Ann Achieng",
		gender: "Male",
		form: 3,
		math: 51,
		english: 63,
		science: 84,
		ict: 87,
		attendance: 71,
		grade: "B",
		total: 285,
		average: 71.25
	},
	{
		id: "STU049",
		name: "David Kiptoo",
		gender: "Male",
		form: 1,
		math: 79,
		english: 65,
		science: 25,
		ict: 25,
		attendance: 76,
		grade: "E",
		total: 194,
		average: 48.5
	},
	{
		id: "STU050",
		name: "Mercy Muthoni",
		gender: "Male",
		form: 3,
		math: 45,
		english: 86,
		science: 90,
		ict: 79,
		attendance: 90,
		grade: "B",
		total: 300,
		average: 75
	},
	{
		id: "STU051",
		name: "James Kariuki",
		gender: "Male",
		form: 1,
		math: 34,
		english: 49,
		science: 89,
		ict: 29,
		attendance: 78,
		grade: "D",
		total: 201,
		average: 50.25
	},
	{
		id: "STU052",
		name: "Lydia Nyambura",
		gender: "Male",
		form: 4,
		math: 41,
		english: 35,
		science: 59,
		ict: 71,
		attendance: 57,
		grade: "D",
		total: 206,
		average: 51.5
	},
	{
		id: "STU053",
		name: "Samuel Kibet",
		gender: "Female",
		form: 2,
		math: 56,
		english: 43,
		science: 65,
		ict: 96,
		attendance: 81,
		grade: "C",
		total: 260,
		average: 65
	},
	{
		id: "STU054",
		name: "Joy Wanjiku",
		gender: "Male",
		form: 2,
		math: 45,
		english: 52,
		science: 72,
		ict: 28,
		attendance: 66,
		grade: "E",
		total: 197,
		average: 49.25
	},
	{
		id: "STU055",
		name: "Michael Mwangi",
		gender: "Female",
		form: 4,
		math: 56,
		english: 64,
		science: 40,
		ict: 38,
		attendance: 79,
		grade: "E",
		total: 198,
		average: 49.5
	},
	{
		id: "STU056",
		name: "Esther Chebet",
		gender: "Male",
		form: 4,
		math: 53,
		english: 55,
		science: 78,
		ict: 69,
		attendance: 74,
		grade: "C",
		total: 255,
		average: 63.75
	},
	{
		id: "STU057",
		name: "Joseph Omondi",
		gender: "Male",
		form: 2,
		math: 28,
		english: 54,
		science: 71,
		ict: 67,
		attendance: 72,
		grade: "D",
		total: 220,
		average: 55
	},
	{
		id: "STU058",
		name: "Nancy Wambui",
		gender: "Male",
		form: 3,
		math: 69,
		english: 95,
		science: 71,
		ict: 93,
		attendance: 76,
		grade: "A",
		total: 328,
		average: 82
	},
	{
		id: "STU059",
		name: "Paul Kimani",
		gender: "Male",
		form: 1,
		math: 58,
		english: 52,
		science: 94,
		ict: 58,
		attendance: 57,
		grade: "C",
		total: 262,
		average: 65.5
	},
	{
		id: "STU060",
		name: "Alice Wairimu",
		gender: "Male",
		form: 4,
		math: 69,
		english: 70,
		science: 75,
		ict: 90,
		attendance: 62,
		grade: "B",
		total: 304,
		average: 76
	},
	{
		id: "STU061",
		name: "John Otieno",
		gender: "Female",
		form: 2,
		math: 57,
		english: 35,
		science: 75,
		ict: 25,
		attendance: 88,
		grade: "E",
		total: 192,
		average: 48
	},
	{
		id: "STU062",
		name: "Ruth Njeri",
		gender: "Male",
		form: 3,
		math: 80,
		english: 38,
		science: 62,
		ict: 65,
		attendance: 97,
		grade: "C",
		total: 245,
		average: 61.25
	},
	{
		id: "STU063",
		name: "Dennis Mutua",
		gender: "Male",
		form: 3,
		math: 89,
		english: 69,
		science: 72,
		ict: 66,
		attendance: 80,
		grade: "B",
		total: 296,
		average: 74
	},
	{
		id: "STU064",
		name: "Sharon Atieno",
		gender: "Female",
		form: 2,
		math: 49,
		english: 83,
		science: 68,
		ict: 47,
		attendance: 94,
		grade: "C",
		total: 247,
		average: 61.75
	},
	{
		id: "STU065",
		name: "Victor Maina",
		gender: "Female",
		form: 4,
		math: 95,
		english: 30,
		science: 58,
		ict: 61,
		attendance: 68,
		grade: "C",
		total: 244,
		average: 61
	},
	{
		id: "STU066",
		name: "Cynthia Adhiambo",
		gender: "Female",
		form: 3,
		math: 84,
		english: 86,
		science: 76,
		ict: 52,
		attendance: 87,
		grade: "B",
		total: 298,
		average: 74.5
	},
	{
		id: "STU067",
		name: "Eric Kamau",
		gender: "Female",
		form: 2,
		math: 35,
		english: 66,
		science: 85,
		ict: 67,
		attendance: 60,
		grade: "C",
		total: 253,
		average: 63.25
	},
	{
		id: "STU068",
		name: "Beatrice Achieng",
		gender: "Male",
		form: 3,
		math: 53,
		english: 55,
		science: 38,
		ict: 28,
		attendance: 57,
		grade: "E",
		total: 174,
		average: 43.5
	},
	{
		id: "STU069",
		name: "Collins Kiptoo",
		gender: "Male",
		form: 4,
		math: 34,
		english: 88,
		science: 73,
		ict: 98,
		attendance: 67,
		grade: "B",
		total: 293,
		average: 73.25
	},
	{
		id: "STU070",
		name: "Diana Muthoni",
		gender: "Female",
		form: 4,
		math: 76,
		english: 61,
		science: 38,
		ict: 25,
		attendance: 61,
		grade: "D",
		total: 200,
		average: 50
	},
	{
		id: "STU071",
		name: "George Kariuki",
		gender: "Female",
		form: 2,
		math: 47,
		english: 96,
		science: 79,
		ict: 31,
		attendance: 90,
		grade: "C",
		total: 253,
		average: 63.25
	},
	{
		id: "STU072",
		name: "Irene Nyambura",
		gender: "Male",
		form: 1,
		math: 83,
		english: 47,
		science: 79,
		ict: 92,
		attendance: 90,
		grade: "B",
		total: 301,
		average: 75.25
	},
	{
		id: "STU073",
		name: "Martin Kibet",
		gender: "Female",
		form: 4,
		math: 89,
		english: 84,
		science: 90,
		ict: 82,
		attendance: 65,
		grade: "A",
		total: 345,
		average: 86.25
	},
	{
		id: "STU074",
		name: "Susan Wanjiku",
		gender: "Female",
		form: 4,
		math: 58,
		english: 61,
		science: 55,
		ict: 91,
		attendance: 86,
		grade: "C",
		total: 265,
		average: 66.25
	},
	{
		id: "STU075",
		name: "Felix Mwangi",
		gender: "Male",
		form: 3,
		math: 81,
		english: 39,
		science: 56,
		ict: 55,
		attendance: 72,
		grade: "D",
		total: 231,
		average: 57.75
	},
	{
		id: "STU076",
		name: "Agnes Chebet",
		gender: "Female",
		form: 3,
		math: 94,
		english: 40,
		science: 37,
		ict: 44,
		attendance: 69,
		grade: "D",
		total: 215,
		average: 53.75
	},
	{
		id: "STU077",
		name: "Patrick Omondi",
		gender: "Female",
		form: 2,
		math: 52,
		english: 38,
		science: 73,
		ict: 77,
		attendance: 76,
		grade: "C",
		total: 240,
		average: 60
	},
	{
		id: "STU078",
		name: "Caroline Wambui",
		gender: "Female",
		form: 4,
		math: 32,
		english: 56,
		science: 73,
		ict: 74,
		attendance: 92,
		grade: "D",
		total: 235,
		average: 58.75
	},
	{
		id: "STU079",
		name: "Robert Kimani",
		gender: "Male",
		form: 4,
		math: 86,
		english: 30,
		science: 65,
		ict: 63,
		attendance: 79,
		grade: "C",
		total: 244,
		average: 61
	},
	{
		id: "STU080",
		name: "Janet Wairimu",
		gender: "Female",
		form: 2,
		math: 87,
		english: 58,
		science: 54,
		ict: 80,
		attendance: 86,
		grade: "C",
		total: 279,
		average: 69.75
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
var formOptions = [
	"all",
	1,
	2,
	3,
	4
];
var gradeOptions = [
	"all",
	"A",
	"B",
	"C",
	"D",
	"E"
];
var forms = [
	1,
	2,
	3,
	4
];
var grades = [
	"A",
	"B",
	"C",
	"D",
	"E"
];
var gradeOrder = {
	A: 4,
	B: 3,
	C: 2,
	D: 1,
	E: 0
};
function asNumber(value) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value === "string") {
		const parsed = Number(value);
		return Number.isFinite(parsed) ? parsed : 0;
	}
	return 0;
}
function mean(values) {
	if (values.length === 0) return 0;
	return values.reduce((sum, value) => sum + value, 0) / values.length;
}
function maxBy(rows, pick) {
	return rows.reduce((best, row) => pick(row) > pick(best) ? row : best);
}
function minBy(rows, pick) {
	return rows.reduce((best, row) => pick(row) < pick(best) ? row : best);
}
function chipClass(active) {
	return active ? "inline-flex min-h-11 items-center rounded-full border border-ink bg-ink px-4 text-paper" : "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-ink";
}
function compareStudents(key, dir) {
	const sign = dir === "asc" ? 1 : -1;
	return (a, b) => {
		if (key === "name") return a.name.localeCompare(b.name) * sign;
		if (key === "attendance") return (a.attendance - b.attendance) * sign;
		if (key === "grade") return ((gradeOrder[a.grade] ?? -1) - (gradeOrder[b.grade] ?? -1)) * sign;
		return (a.average - b.average) * sign;
	};
}
function conflictNames() {
	const gendersByName = /* @__PURE__ */ new Map();
	for (const student of students) {
		const existing = gendersByName.get(student.name);
		if (existing) existing.add(student.gender);
		else gendersByName.set(student.name, /* @__PURE__ */ new Set([student.gender]));
	}
	return [...gendersByName.entries()].filter((entry) => entry[1].size > 1).map((entry) => entry[0]).sort((a, b) => a.localeCompare(b));
}
var conflicts = conflictNames();
function SortHeader({ label, column, sortKey, sortDir, onSort, align = "left" }) {
	const active = sortKey === column;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		className: `py-2 pr-3 font-normal ${align === "right" ? "text-right" : "text-left"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: `inline-flex min-h-11 items-center gap-1 text-muted ${align === "right" ? "ml-auto" : ""}`,
			"aria-label": active ? `${label}, sorted ${sortDir === "asc" ? "ascending" : "descending"}` : `Sort by ${label}`,
			onClick: () => onSort(column),
			children: [label, active ? sortDir === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
				"aria-hidden": "true",
				className: "size-4"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
				"aria-hidden": "true",
				className: "size-4"
			}) : null]
		})
	});
}
function StudentsPage() {
	const [form, setForm] = (0, import_react.useState)("all");
	const [grade, setGrade] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [sortKey, setSortKey] = (0, import_react.useState)("average");
	const [sortDir, setSortDir] = (0, import_react.useState)("desc");
	const needle = query.trim().toLowerCase();
	const filtered = students.filter((student) => {
		if (form !== "all" && student.form !== form) return false;
		if (grade !== "all" && student.grade !== grade) return false;
		if (needle !== "" && !student.name.toLowerCase().includes(needle)) return false;
		return true;
	});
	const sorted = [...filtered].sort(compareStudents(sortKey, sortDir));
	const count = filtered.length;
	const meanAverage = mean(filtered.map((student) => student.average));
	const gradeA = filtered.filter((student) => student.grade === "A").length;
	const meanAttendance = mean(filtered.map((student) => student.attendance));
	const subjectMeans = [
		{
			subject: "Math",
			mean: mean(filtered.map((student) => student.math))
		},
		{
			subject: "English",
			mean: mean(filtered.map((student) => student.english))
		},
		{
			subject: "Science",
			mean: mean(filtered.map((student) => student.science))
		},
		{
			subject: "ICT",
			mean: mean(filtered.map((student) => student.ict))
		}
	];
	const gradeCounts = grades.map((letter) => ({
		grade: letter,
		students: filtered.filter((student) => student.grade === letter).length
	}));
	const formMeans = forms.flatMap((level) => {
		const rows = filtered.filter((student) => student.form === level);
		if (rows.length === 0) return [];
		return [{
			form: `Form ${level}`,
			mean: mean(rows.map((student) => student.average))
		}];
	});
	const strongest = count > 0 ? maxBy(subjectMeans, (row) => row.mean) : void 0;
	const weakest = count > 0 ? minBy(subjectMeans, (row) => row.mean) : void 0;
	function onSort(column) {
		if (sortKey === column) {
			setSortDir((current) => current === "asc" ? "desc" : "asc");
			return;
		}
		setSortKey(column);
		setSortDir(column === "name" ? "asc" : "desc");
	}
	let subjectLine = "";
	if (strongest && weakest) subjectLine = strongest.mean === weakest.mean ? `On this filter every subject mean is ${num(strongest.mean, 1)}.` : `On this filter, ${strongest.subject} is the strongest subject (${num(strongest.mean, 1)}) and ${weakest.subject} is the weakest (${num(weakest.mean, 1)}).`;
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
				children: "Cleaning · grades"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-ink sm:text-5xl",
				children: "Student scores"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Eighty records, four subjects, and a gender field that contradicts itself. Filters, charts, and the table use the current selection. Nothing on this page rewrites a row."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: formOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: chipClass(form === option),
					onClick: () => setForm(option),
					children: option === "all" ? "All forms" : `Form ${option}`
				}, String(option)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: gradeOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: chipClass(grade === option),
					onClick: () => setGrade(option),
					children: option === "all" ? "All grades" : option
				}, option))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block max-w-md text-sm text-muted",
				children: ["Search by name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (event) => setQuery(event.target.value),
					className: "mt-2 min-h-11 w-full rounded-full border border-line bg-paper px-4 text-ink"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Students",
						value: num(count, 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Mean average",
						value: num(meanAverage, 1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Grade A",
						value: num(gradeA, 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Mean attendance",
						value: num(meanAttendance, 0)
					})
				]
			}),
			count === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-ink",
				children: "No students match."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-ink",
					children: subjectLine
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 grid gap-6 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-card border border-line bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-ink",
								children: "Grades"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterMount, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
										data: gradeCounts,
										margin: {
											top: 8,
											right: 8,
											left: 0,
											bottom: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "grade",
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
												dataKey: "students",
												name: "Students",
												fill: "var(--color-teal)",
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
								children: "Subject means"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterMount, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
										data: subjectMeans,
										margin: {
											top: 8,
											right: 8,
											left: 0,
											bottom: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "subject",
												tick: axisTick
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: axisTick }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
												contentStyle: tooltipStyle,
												formatter: (value) => num(asNumber(value), 1)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
												dataKey: "mean",
												name: "Mean",
												fill: "var(--color-teal)",
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
								children: "Mean by form"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterMount, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
										data: formMeans,
										margin: {
											top: 8,
											right: 8,
											left: 0,
											bottom: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "form",
												tick: axisTick
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: axisTick }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
												contentStyle: tooltipStyle,
												formatter: (value) => num(asNumber(value), 1)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
												dataKey: "mean",
												name: "Mean average",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[40rem] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 text-left font-normal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex min-h-11 items-center",
										children: "ID"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortHeader, {
									label: "Name",
									column: "name",
									sortKey,
									sortDir,
									onSort
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 text-left font-normal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex min-h-11 items-center",
										children: "Gender"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 text-left font-normal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex min-h-11 items-center",
										children: "Form"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortHeader, {
									label: "Average",
									column: "average",
									sortKey,
									sortDir,
									onSort,
									align: "right"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortHeader, {
									label: "Attendance",
									column: "attendance",
									sortKey,
									sortDir,
									onSort,
									align: "right"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortHeader, {
									label: "Grade",
									column: "grade",
									sortKey,
									sortDir,
									onSort
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: sorted.map((student) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line text-ink",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: student.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: student.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: student.gender
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 tabular-nums",
									children: student.form
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 text-right tabular-nums",
									children: num(student.average, 1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3 text-right tabular-nums",
									children: num(student.attendance, 0)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-3",
									children: student.grade
								})
							]
						}, student.id)) })]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-card border border-copper/40 bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: "Gender field"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							num(conflicts.length, 0),
							" ",
							conflicts.length === 1 ? "name appears" : "names appear",
							" as more than one gender",
							conflicts.length > 0 ? `: ${conflicts.join(", ")}.` : "."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink",
						children: "Gender is recorded, but these names appear as both Male and Female. Do not use the field until the source is checked. Nothing here has been corrected."
					})
				]
			})
		]
	})] });
}
//#endregion
export { StudentsPage as component };
