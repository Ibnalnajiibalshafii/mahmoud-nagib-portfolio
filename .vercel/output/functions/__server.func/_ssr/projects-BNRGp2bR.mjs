import { n as createServerFn } from "./ssr.mjs";
import { r as getSql } from "./db-D8RGlLK9.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BNRGp2bR.js
var OWNER_PASSWORD = "Swabra12_";
function clean(value, max) {
	return String(value ?? "").trim().slice(0, max);
}
function readProject(input) {
	const title = clean(input.title, 120);
	const summary = clean(input.summary, 800);
	const tools = clean(input.tools, 160);
	const tags = clean(input.tags, 200);
	const link = clean(input.link, 300);
	const password = String(input.password ?? "");
	if (!title) throw new Error("Add a project title.");
	if (!summary) throw new Error("Add a short description.");
	if (link && !/^https?:\/\/\S+$/i.test(link)) throw new Error("Link must start with http:// or https://");
	return {
		title,
		summary,
		tools,
		tags,
		link,
		password
	};
}
function assertOwner(password) {
	if (password !== OWNER_PASSWORD) throw new Error("Wrong password.");
}
var listProjects_createServerFn_handler = createServerRpc({
	id: "7a36febddc9c6499f718dd1f453e12d6ddb7cb35acf28a1f093f8c07a3d87f15",
	name: "listProjects",
	filename: "src/lib/projects.ts"
}, (opts) => listProjects.__executeServer(opts));
var listProjects = createServerFn({ method: "GET" }).handler(listProjects_createServerFn_handler, async () => {
	return (await getSql())`
    select id, title, summary, tools, tags, link
    from projects
    order by id desc
  `;
});
var getProject_createServerFn_handler = createServerRpc({
	id: "ba33d18021e14ba744ba54115823a27d329833aada496be5b94b37b0893f8f63",
	name: "getProject",
	filename: "src/lib/projects.ts"
}, (opts) => getProject.__executeServer(opts));
var getProject = createServerFn({ method: "GET" }).validator((id) => {
	const parsed = Number(id);
	if (!Number.isInteger(parsed) || parsed < 1) throw new Error("Unknown project.");
	return parsed;
}).handler(getProject_createServerFn_handler, async ({ data }) => {
	return (await (await getSql())`
      select id, title, summary, tools, tags, link
      from projects
      where id = ${data}
    `)[0] ?? null;
});
var unlockAdmin_createServerFn_handler = createServerRpc({
	id: "0292ed52df1b9f98c8887892dbcbaedc792a1fe75fdfcd7d1c0563f9df8f5ec3",
	name: "unlockAdmin",
	filename: "src/lib/projects.ts"
}, (opts) => unlockAdmin.__executeServer(opts));
var unlockAdmin = createServerFn({ method: "POST" }).validator((password) => String(password ?? "")).handler(unlockAdmin_createServerFn_handler, async ({ data }) => {
	assertOwner(data);
	return { ok: true };
});
var createProject_createServerFn_handler = createServerRpc({
	id: "a6d5feb012adb5e1b78c5e5a1f48ac73acebfc31889e747de658667c78699547",
	name: "createProject",
	filename: "src/lib/projects.ts"
}, (opts) => createProject.__executeServer(opts));
var createProject = createServerFn({ method: "POST" }).validator((input) => readProject(input)).handler(createProject_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	return (await (await getSql())`
      insert into projects (title, summary, tools, tags, link)
      values (${data.title}, ${data.summary}, ${data.tools}, ${data.tags}, ${data.link})
      returning id, title, summary, tools, tags, link
    `)[0];
});
var updateProject_createServerFn_handler = createServerRpc({
	id: "6ae565c05b0d7e05a10ebb3ae962b787cb8b045cffd5d9dc618f0911f361e385",
	name: "updateProject",
	filename: "src/lib/projects.ts"
}, (opts) => updateProject.__executeServer(opts));
var updateProject = createServerFn({ method: "POST" }).validator((input) => {
	const id = Number(input.id);
	if (!Number.isInteger(id) || id < 1) throw new Error("Unknown project.");
	return {
		id,
		...readProject(input)
	};
}).handler(updateProject_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	const rows = await (await getSql())`
      update projects
      set title = ${data.title},
          summary = ${data.summary},
          tools = ${data.tools},
          tags = ${data.tags},
          link = ${data.link}
      where id = ${data.id}
      returning id, title, summary, tools, tags, link
    `;
	if (!rows[0]) throw new Error("That project is no longer there.");
	return rows[0];
});
var deleteProject_createServerFn_handler = createServerRpc({
	id: "e5259a3f97b222e9c12cfe9f11677c1f931633be180e1058bfaeac07ecdc81e5",
	name: "deleteProject",
	filename: "src/lib/projects.ts"
}, (opts) => deleteProject.__executeServer(opts));
var deleteProject = createServerFn({ method: "POST" }).validator((input) => {
	const parsed = Number(input?.id);
	if (!Number.isInteger(parsed) || parsed < 1) throw new Error("Unknown project.");
	return {
		id: parsed,
		password: String(input?.password ?? "")
	};
}).handler(deleteProject_createServerFn_handler, async ({ data }) => {
	assertOwner(data.password);
	await (await getSql())`delete from projects where id = ${data.id}`;
	return { ok: true };
});
//#endregion
export { createProject_createServerFn_handler, deleteProject_createServerFn_handler, getProject_createServerFn_handler, listProjects_createServerFn_handler, unlockAdmin_createServerFn_handler, updateProject_createServerFn_handler };
