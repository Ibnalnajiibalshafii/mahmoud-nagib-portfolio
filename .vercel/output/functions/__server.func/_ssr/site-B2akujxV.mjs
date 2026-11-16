import { n as createServerFn } from "./ssr.mjs";
import { t as assertOwner } from "./projects-CgIS0XqX.mjs";
import { r as getSql } from "./db-6j5TSbzF.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-B2akujxV.js
var fallbackContact = {
	email: "mahmuodnagib9@gmail.com",
	phone: "+254 745 791 267",
	linkedin: "https://www.linkedin.com/in/mahmoudnagib001",
	location: "Nairobi, Kenya",
	youtube: "https://www.youtube.com/@mahmoudnagibmotivation",
	tiktok: "https://www.tiktok.com/@growwithmahmoud",
	instagram: "https://www.instagram.com/grow.withmahmoud"
};
var fallbackSkills = [
	{
		id: 1,
		label: "Python & Pandas",
		note: "Cleaning and aggregation"
	},
	{
		id: 2,
		label: "Excel",
		note: "PivotTables and formulas"
	},
	{
		id: 3,
		label: "SQL",
		note: "Queries and joins"
	},
	{
		id: 4,
		label: "Visualization",
		note: "Charts that explain"
	},
	{
		id: 5,
		label: "Reporting",
		note: "Findings and next steps"
	}
];
var reserved = /* @__PURE__ */ new Set([
	"admin",
	"api",
	"work",
	"login",
	"p",
	"projects"
]);
function clean(value, max) {
	return String(value ?? "").trim().slice(0, max);
}
function readSlug(value) {
	const slug = clean(value, 60).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
	if (!slug) throw new Error("Add a page address, like services-extra.");
	if (reserved.has(slug)) throw new Error("That page address is reserved.");
	return slug;
}
function linkOrEmpty(value) {
	const text = value.trim();
	if (!text) return "";
	return /^https?:\/\//i.test(text) ? text : `https://${text}`;
}
var getContact_createServerFn_handler = createServerRpc({
	id: "05227a15742113eeebd4ee7e297dc3eebb684a9b08ca1352c615f61cd8ff7b04",
	name: "getContact",
	filename: "src/lib/site.ts"
}, (opts) => getContact.__executeServer(opts));
var getContact = createServerFn({ method: "GET" }).handler(getContact_createServerFn_handler, async () => {
	return (await (await getSql())`
    select email, phone, linkedin, location, youtube, tiktok, instagram
    from site_contact where id = 1
  `)[0] ?? fallbackContact;
});
var updateContact_createServerFn_handler = createServerRpc({
	id: "d5543ab6ab66b1c792dfa21af4caf169839ae0d708d3f08e2e8a59d41079083c",
	name: "updateContact",
	filename: "src/lib/site.ts"
}, (opts) => updateContact.__executeServer(opts));
var updateContact = createServerFn({ method: "POST" }).validator((input) => ({
	email: clean(input.email, 160),
	phone: clean(input.phone, 40),
	linkedin: clean(input.linkedin, 200),
	location: clean(input.location, 80),
	youtube: clean(input.youtube, 240),
	tiktok: clean(input.tiktok, 240),
	instagram: clean(input.instagram, 240),
	password: String(input.password ?? "")
})).handler(updateContact_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	if (!data.email.includes("@")) throw new Error("Enter a valid email.");
	if (!data.phone) throw new Error("Enter a phone number.");
	if (!data.location) throw new Error("Enter a location.");
	const linkedin = linkOrEmpty(data.linkedin);
	const youtube = linkOrEmpty(data.youtube);
	const tiktok = linkOrEmpty(data.tiktok);
	const instagram = linkOrEmpty(data.instagram);
	return (await (await getSql())`
      insert into site_contact (id, email, phone, linkedin, location, youtube, tiktok, instagram)
      values (1, ${data.email}, ${data.phone}, ${linkedin}, ${data.location}, ${youtube}, ${tiktok}, ${instagram})
      on conflict (id) do update
      set email = excluded.email,
          phone = excluded.phone,
          linkedin = excluded.linkedin,
          location = excluded.location,
          youtube = excluded.youtube,
          tiktok = excluded.tiktok,
          instagram = excluded.instagram
      returning email, phone, linkedin, location, youtube, tiktok, instagram
    `)[0] ?? fallbackContact;
});
var getPortrait_createServerFn_handler = createServerRpc({
	id: "f7f79338b6252cb308c2ef0f41479dccbd50358941c23a6d0022f6d377925466",
	name: "getPortrait",
	filename: "src/lib/site.ts"
}, (opts) => getPortrait.__executeServer(opts));
var getPortrait = createServerFn({ method: "GET" }).handler(getPortrait_createServerFn_handler, async () => {
	return (await (await getSql())`select portrait from site_profile where id = 1`)[0]?.portrait ?? "";
});
var updatePortrait_createServerFn_handler = createServerRpc({
	id: "0cde20bf2923e43ce851c38266c70a19b62f843c9a6d3397b7d6d804c679f54d",
	name: "updatePortrait",
	filename: "src/lib/site.ts"
}, (opts) => updatePortrait.__executeServer(opts));
var updatePortrait = createServerFn({ method: "POST" }).validator((input) => ({
	portrait: String(input.portrait ?? ""),
	password: String(input.password ?? "")
})).handler(updatePortrait_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	const portrait = data.portrait.trim();
	if (portrait && !portrait.startsWith("data:image/")) throw new Error("Choose an image file.");
	if (portrait.length > 14e5) throw new Error("Use a photo under 1 MB.");
	await (await getSql())`
      insert into site_profile (id, portrait)
      values (1, ${portrait})
      on conflict (id) do update set portrait = excluded.portrait
    `;
	return { portrait };
});
var listSkills_createServerFn_handler = createServerRpc({
	id: "da2ebc76f7bb4473135743f575930206aa48400009f434ffc524f4243c8d309d",
	name: "listSkills",
	filename: "src/lib/site.ts"
}, (opts) => listSkills.__executeServer(opts));
var listSkills = createServerFn({ method: "GET" }).handler(listSkills_createServerFn_handler, async () => {
	const rows = await (await getSql())`
    select id, label, note from site_skills order by sort, id
  `;
	return rows.length ? rows : fallbackSkills;
});
var saveSkill_createServerFn_handler = createServerRpc({
	id: "4cf0bb0bf226dc7f0ff57e513e07f91c80a05bcfe848e04ccc6b844d0223a621",
	name: "saveSkill",
	filename: "src/lib/site.ts"
}, (opts) => saveSkill.__executeServer(opts));
var saveSkill = createServerFn({ method: "POST" }).validator((input) => ({
	label: clean(input.label, 60),
	note: clean(input.note, 80),
	password: String(input.password ?? "")
})).handler(saveSkill_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	if (!data.label) throw new Error("Add a skill name.");
	const sql = await getSql();
	const next = await sql`select coalesce(max(sort), 0) + 1 as sort from site_skills`;
	const sort = Number(next[0]?.sort ?? 1);
	return (await sql`
      insert into site_skills (label, note, sort)
      values (${data.label}, ${data.note}, ${sort})
      returning id, label, note
    `)[0];
});
var deleteSkill_createServerFn_handler = createServerRpc({
	id: "ca0174d3c5bffd31c9f9bcb984c137102c8b43e8a498d49b24518c9889ae3a24",
	name: "deleteSkill",
	filename: "src/lib/site.ts"
}, (opts) => deleteSkill.__executeServer(opts));
var deleteSkill = createServerFn({ method: "POST" }).validator((input) => ({
	id: Number(input.id),
	password: String(input.password ?? "")
})).handler(deleteSkill_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	if (!Number.isInteger(data.id) || data.id < 1) throw new Error("Unknown skill.");
	await (await getSql())`delete from site_skills where id = ${data.id}`;
	return { ok: true };
});
var listPages_createServerFn_handler = createServerRpc({
	id: "9cbfe932944e37b0692cde3ad424a759068c06ecb8b8966f43f8fb4ca654ea4c",
	name: "listPages",
	filename: "src/lib/site.ts"
}, (opts) => listPages.__executeServer(opts));
var listPages = createServerFn({ method: "GET" }).handler(listPages_createServerFn_handler, async () => {
	return (await getSql())`select id, slug, title, body from site_pages order by id desc`;
});
var getPage_createServerFn_handler = createServerRpc({
	id: "c885eed991fbd1f67948582cee981ae2587c59208eae6e80acec565666e57a6c",
	name: "getPage",
	filename: "src/lib/site.ts"
}, (opts) => getPage.__executeServer(opts));
var getPage = createServerFn({ method: "GET" }).validator((slug) => readSlug(slug)).handler(getPage_createServerFn_handler, async ({ data }) => {
	return (await (await getSql())`
      select id, slug, title, body from site_pages where slug = ${data}
    `)[0] ?? null;
});
function readPage(input) {
	const title = clean(input.title, 120);
	const body = clean(input.body, 8e3);
	const slug = readSlug(input.slug || title);
	if (!title) throw new Error("Add a page title.");
	if (!body) throw new Error("Write the page text.");
	return {
		title,
		slug,
		body,
		password: String(input.password ?? "")
	};
}
var savePage_createServerFn_handler = createServerRpc({
	id: "371178daf4db2c58018d816a08785d2b5fb4e6ce9b5573d382e4b05dd9c05014",
	name: "savePage",
	filename: "src/lib/site.ts"
}, (opts) => savePage.__executeServer(opts));
var savePage = createServerFn({ method: "POST" }).validator((input) => {
	const page = readPage(input);
	const id = input.id == null || input.id === 0 ? null : Number(input.id);
	if (id != null && (!Number.isInteger(id) || id < 1)) throw new Error("Unknown page.");
	return {
		...page,
		id
	};
}).handler(savePage_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	const sql = await getSql();
	const clash = await sql`select id from site_pages where slug = ${data.slug}`;
	if (clash[0] && clash[0].id !== data.id) throw new Error("That page address is already used.");
	if (data.id) {
		const rows = await sql`
        update site_pages
        set title = ${data.title}, slug = ${data.slug}, body = ${data.body}
        where id = ${data.id}
        returning id, slug, title, body
      `;
		if (!rows[0]) throw new Error("That page is no longer there.");
		return rows[0];
	}
	return (await sql`
      insert into site_pages (slug, title, body)
      values (${data.slug}, ${data.title}, ${data.body})
      returning id, slug, title, body
    `)[0];
});
var deletePage_createServerFn_handler = createServerRpc({
	id: "06ff4630317c492c8f93960414b719df66e82234df77963ffa4427cfe4e5e4e6",
	name: "deletePage",
	filename: "src/lib/site.ts"
}, (opts) => deletePage.__executeServer(opts));
var deletePage = createServerFn({ method: "POST" }).validator((input) => ({
	id: Number(input.id),
	password: String(input.password ?? "")
})).handler(deletePage_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	if (!Number.isInteger(data.id) || data.id < 1) throw new Error("Unknown page.");
	await (await getSql())`delete from site_pages where id = ${data.id}`;
	return { ok: true };
});
//#endregion
export { deletePage_createServerFn_handler, deleteSkill_createServerFn_handler, getContact_createServerFn_handler, getPage_createServerFn_handler, getPortrait_createServerFn_handler, listPages_createServerFn_handler, listSkills_createServerFn_handler, savePage_createServerFn_handler, saveSkill_createServerFn_handler, updateContact_createServerFn_handler, updatePortrait_createServerFn_handler };
