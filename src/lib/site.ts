import { assertOwner } from "@/lib/projects";
import { getSql } from "@/lib/db";
import { createServerFn } from "@tanstack/react-start";

export type SiteContact = {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  youtube: string;
  tiktok: string;
  instagram: string;
};

export type SitePage = {
  id: number;
  slug: string;
  title: string;
  body: string;
};

export type SiteAbout = {
  lead: string;
  more: string;
};

const fallbackAbout: SiteAbout = {
  lead: "I am a junior data analyst in Nairobi. I take a raw file, check what can be trusted, and turn it into a comparison a team can use.",
  more: "The dashboards on this site cover supermarket sales, bank branch performance, and student scores. Each one names the result, the figure behind it, and the next step.",
};

export type SiteSkill = {
  id: number;
  label: string;
  note: string;
};

const fallbackContact: SiteContact = {
  email: "mahmuodnagib9@gmail.com",
  phone: "+254 745 791 267",
  linkedin: "https://www.linkedin.com/in/mahmoudnagib001",
  location: "Nairobi, Kenya",
  youtube: "https://www.youtube.com/@mahmoudnagibmotivation",
  tiktok: "https://www.tiktok.com/@growwithmahmoud",
  instagram: "https://www.instagram.com/grow.withmahmoud",
};

const fallbackSkills: SiteSkill[] = [
  { id: 1, label: "Python & Pandas", note: "Cleaning and aggregation" },
  { id: 2, label: "Excel", note: "PivotTables and formulas" },
  { id: 3, label: "SQL", note: "Queries and joins" },
  { id: 4, label: "Visualization", note: "Charts that explain" },
  { id: 5, label: "Reporting", note: "Findings and next steps" },
];

const reserved = new Set(["admin", "api", "work", "login", "p", "projects"]);

function clean(value: unknown, max: number): string {
  return String(value ?? "").trim().slice(0, max);
}

function readSlug(value: unknown): string {
  const slug = clean(value, 60)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  if (!slug) throw new Error("Add a page address, like services-extra.");
  if (reserved.has(slug)) throw new Error("That page address is reserved.");
  return slug;
}

function linkOrEmpty(value: string): string {
  const text = value.trim();
  if (!text) return "";
  return /^https?:\/\//i.test(text) ? text : `https://${text}`;
}

export const getContact = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  const rows = await sql<SiteContact>`
    select email, phone, linkedin, location, youtube, tiktok, instagram
    from site_contact where id = 1
  `;
  return rows[0] ?? fallbackContact;
});

export const updateContact = createServerFn({ method: "POST" })
  .validator((input: SiteContact & { password: string }) => ({
    email: clean(input.email, 160),
    phone: clean(input.phone, 40),
    linkedin: clean(input.linkedin, 200),
    location: clean(input.location, 80),
    youtube: clean(input.youtube, 240),
    tiktok: clean(input.tiktok, 240),
    instagram: clean(input.instagram, 240),
    password: String(input.password ?? ""),
  }))
  .handler(async ({ data }) => {
    assertOwner(data.password);
    if (!data.email.includes("@")) throw new Error("Enter a valid email.");
    if (!data.phone) throw new Error("Enter a phone number.");
    if (!data.location) throw new Error("Enter a location.");
    const linkedin = linkOrEmpty(data.linkedin);
    const youtube = linkOrEmpty(data.youtube);
    const tiktok = linkOrEmpty(data.tiktok);
    const instagram = linkOrEmpty(data.instagram);
    const sql = await getSql();
    const rows = await sql<SiteContact>`
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
    `;
    return rows[0] ?? fallbackContact;
  });

export const getPortrait = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  const rows = await sql<{ portrait: string }>`select portrait from site_profile where id = 1`;
  return rows[0]?.portrait ?? "";
});

export const updatePortrait = createServerFn({ method: "POST" })
  .validator((input: { portrait: string; password: string }) => ({
    portrait: String(input.portrait ?? ""),
    password: String(input.password ?? ""),
  }))
  .handler(async ({ data }) => {
    assertOwner(data.password);
    const portrait = data.portrait.trim();
    if (portrait && !portrait.startsWith("data:image/")) {
      throw new Error("Choose an image file.");
    }
    if (portrait.length > 1_400_000) throw new Error("Use a photo under 1 MB.");
    const sql = await getSql();
    await sql`
      insert into site_profile (id, portrait)
      values (1, ${portrait})
      on conflict (id) do update set portrait = excluded.portrait
    `;
    return { portrait };
  });

export const getAbout = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  const rows = await sql<SiteAbout>`
    select about_lead as lead, about_more as more from site_profile where id = 1
  `;
  const row = rows[0];
  if (!row || !row.lead) return fallbackAbout;
  return { lead: row.lead, more: row.more };
});

export const updateAbout = createServerFn({ method: "POST" })
  .validator((input: SiteAbout & { password: string }) => ({
    lead: clean(input.lead, 800),
    more: clean(input.more, 800),
    password: String(input.password ?? ""),
  }))
  .handler(async ({ data }) => {
    assertOwner(data.password);
    if (!data.lead) throw new Error("Write the first About paragraph.");
    const sql = await getSql();
    const rows = await sql<SiteAbout>`
      insert into site_profile (id, portrait, about_lead, about_more)
      values (1, '', ${data.lead}, ${data.more})
      on conflict (id) do update
      set about_lead = excluded.about_lead,
          about_more = excluded.about_more
      returning about_lead as lead, about_more as more
    `;
    return rows[0] ?? fallbackAbout;
  });

export const listSkills = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  const rows = await sql<SiteSkill>`
    select id, label, note from site_skills order by sort, id
  `;
  return rows.length ? rows : fallbackSkills;
});

export const saveSkill = createServerFn({ method: "POST" })
  .validator((input: { label: string; note: string; password: string }) => ({
    label: clean(input.label, 60),
    note: clean(input.note, 80),
    password: String(input.password ?? ""),
  }))
  .handler(async ({ data }) => {
    assertOwner(data.password);
    if (!data.label) throw new Error("Add a skill name.");
    const sql = await getSql();
    const next = await sql<{ sort: number }>`select coalesce(max(sort), 0) + 1 as sort from site_skills`;
    const sort = Number(next[0]?.sort ?? 1);
    const rows = await sql<SiteSkill>`
      insert into site_skills (label, note, sort)
      values (${data.label}, ${data.note}, ${sort})
      returning id, label, note
    `;
    return rows[0];
  });

export const deleteSkill = createServerFn({ method: "POST" })
  .validator((input: { id: number; password: string }) => ({
    id: Number(input.id),
    password: String(input.password ?? ""),
  }))
  .handler(async ({ data }) => {
    assertOwner(data.password);
    if (!Number.isInteger(data.id) || data.id < 1) throw new Error("Unknown skill.");
    const sql = await getSql();
    await sql`delete from site_skills where id = ${data.id}`;
    return { ok: true as const };
  });

export const listPages = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  return sql<SitePage>`select id, slug, title, body from site_pages order by id desc`;
});

export const getPage = createServerFn({ method: "GET" })
  .validator((slug: string) => readSlug(slug))
  .handler(async ({ data }) => {
    const sql = await getSql();
    const rows = await sql<SitePage>`
      select id, slug, title, body from site_pages where slug = ${data}
    `;
    return rows[0] ?? null;
  });

type PageInput = { id?: number; title: string; slug: string; body: string; password: string };

function readPage(input: Partial<PageInput>) {
  const title = clean(input.title, 120);
  const body = clean(input.body, 8000);
  const slug = readSlug(input.slug || title);
  if (!title) throw new Error("Add a page title.");
  if (!body) throw new Error("Write the page text.");
  return { title, slug, body, password: String(input.password ?? "") };
}

export const savePage = createServerFn({ method: "POST" })
  .validator((input: PageInput) => {
    const page = readPage(input);
    const id = input.id == null || input.id === 0 ? null : Number(input.id);
    if (id != null && (!Number.isInteger(id) || id < 1)) throw new Error("Unknown page.");
    return { ...page, id };
  })
  .handler(async ({ data }) => {
    assertOwner(data.password);
    const sql = await getSql();
    const clash = await sql<{ id: number }>`select id from site_pages where slug = ${data.slug}`;
    if (clash[0] && clash[0].id !== data.id) throw new Error("That page address is already used.");
    if (data.id) {
      const rows = await sql<SitePage>`
        update site_pages
        set title = ${data.title}, slug = ${data.slug}, body = ${data.body}
        where id = ${data.id}
        returning id, slug, title, body
      `;
      if (!rows[0]) throw new Error("That page is no longer there.");
      return rows[0];
    }
    const rows = await sql<SitePage>`
      insert into site_pages (slug, title, body)
      values (${data.slug}, ${data.title}, ${data.body})
      returning id, slug, title, body
    `;
    return rows[0];
  });

export const deletePage = createServerFn({ method: "POST" })
  .validator((input: { id: number; password: string }) => ({
    id: Number(input.id),
    password: String(input.password ?? ""),
  }))
  .handler(async ({ data }) => {
    assertOwner(data.password);
    if (!Number.isInteger(data.id) || data.id < 1) throw new Error("Unknown page.");
    const sql = await getSql();
    await sql`delete from site_pages where id = ${data.id}`;
    return { ok: true as const };
  });
