import { SiteHeader } from "@/components/site-header";
import {
  createProject,
  deleteProject,
  listProjects,
  unlockAdmin,
  updateProject,
  type PortfolioProject,
} from "@/lib/projects";
import {
  deletePage,
  deleteSkill,
  getContact,
  getPortrait,
  listPages,
  listSkills,
  savePage,
  saveSkill,
  updateContact,
  updatePortrait,
  type SiteContact,
  type SitePage,
  type SiteSkill,
} from "@/lib/site";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent } from "react";

export const Route = createFileRoute("/admin")({
  loader: async () => {
    const [projects, contact, pages, portrait, skills] = await Promise.all([
      listProjects(),
      getContact(),
      listPages(),
      getPortrait(),
      listSkills(),
    ]);
    return { projects, contact, pages, portrait, skills };
  },
  head: () => ({ meta: [{ title: "Admin | Mahmoud Nagib" }] }),
  component: AdminPage,
});

const empty = { title: "", summary: "", tools: "", tags: "", link: "" };

function AdminPage() {
  const data = Route.useLoaderData();
  const saved = data.projects;
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [section, setSection] = useState<"projects" | "pages" | "contact" | "about">("projects");
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onUnlock(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      await unlockAdmin({ data: password });
      setUnlocked(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Wrong password.");
    } finally {
      setPending(false);
    }
  }

  function fill(project: PortfolioProject) {
    setEditing(project.id);
    setForm({
      title: project.title,
      summary: project.summary,
      tools: project.tools,
      tags: project.tags,
      link: project.link,
    });
    setError("");
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const payload = { ...form, password };
      if (editing) await updateProject({ data: { id: editing, ...payload } });
      else await createProject({ data: payload });
      setForm(empty);
      setEditing(null);
      await router.invalidate();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not save that project.");
    } finally {
      setPending(false);
    }
  }

  async function onDelete(id: number) {
    setPending(true);
    setError("");
    try {
      await deleteProject({ data: { id, password } });
      if (editing === id) {
        setEditing(null);
        setForm(empty);
      }
      await router.invalidate();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not remove that project.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal">Admin</p>
        <h1 className="mt-2 text-4xl font-bold">Site admin</h1>
        <p className="mt-3 text-muted">
          Add projects and pages, update contact and social links, or change the About photo and skills.
        </p>

        {unlocked ? null : (
          <form onSubmit={onUnlock} className="panel mt-8 space-y-4 rounded-2xl p-6">
            <label className="block">
              <span className="mb-1 block text-sm text-muted">Owner password</span>
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-teal"
                placeholder="Password"
              />
            </label>
            {error ? <p className="text-sm text-danger">{error}</p> : null}
            <button
              type="submit"
              disabled={pending}
              className="rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-copper disabled:opacity-60"
            >
              Open admin
            </button>
          </form>
        )}

        {unlocked ? (
          <>
            <div className="mt-8 flex flex-wrap gap-2">
              {(
                [
                  ["projects", "Projects"],
                  ["pages", "Pages"],
                  ["contact", "Contact"],
                  ["about", "About"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setSection(id);
                    setError("");
                  }}
                  className={`rounded-full px-4 py-2 text-sm ${section === id ? "bg-teal text-white" : "border border-line text-ink"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            {section === "projects" ? (
          <>
            <form onSubmit={onSubmit} className="panel mt-8 space-y-4 rounded-2xl p-6">
              <label className="block">
                <span className="mb-1 block text-sm text-muted">Title</span>
                <input
                  required
                  value={form.title}
                  onChange={(event) => setForm({ ...form, title: event.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-teal"
                  placeholder="Sales dashboard for a cafe"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-muted">Tools</span>
                <input
                  value={form.tools}
                  onChange={(event) => setForm({ ...form, tools: event.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-teal"
                  placeholder="Excel • SQL • Power BI"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-muted">Description</span>
                <textarea
                  required
                  rows={4}
                  value={form.summary}
                  onChange={(event) => setForm({ ...form, summary: event.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-teal"
                  placeholder="What you analyzed and what you found."
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-muted">Tags, separated by commas</span>
                <input
                  value={form.tags}
                  onChange={(event) => setForm({ ...form, tags: event.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-teal"
                  placeholder="Cleaning, KPIs, Charts"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-muted">Link (optional)</span>
                <input
                  value={form.link}
                  onChange={(event) => setForm({ ...form, link: event.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-teal"
                  placeholder="https://"
                />
              </label>
              {error ? <p className="text-sm text-danger">{error}</p> : null}
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={pending}
                  className="rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-copper disabled:opacity-60"
                >
                  {editing ? "Save changes" : "Add project"}
                </button>
                {editing ? (
                  <button
                    type="button"
                    className="rounded-full border border-line px-6 py-3 text-ink"
                    onClick={() => {
                      setEditing(null);
                      setForm(empty);
                      setError("");
                    }}
                  >
                    Cancel
                  </button>
                ) : null}
              </div>
            </form>

            <ul className="mt-8 space-y-4">
              {saved.length === 0 ? (
                <li className="text-muted">No extra projects yet.</li>
              ) : (
                saved.map((project) => (
                  <li key={project.id} className="panel rounded-2xl p-5">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    {project.tools ? <p className="mt-1 text-sm text-muted">{project.tools}</p> : null}
                    <p className="mt-2 text-slate-300">{project.summary}</p>
                    <div className="mt-4 flex gap-3">
                      <button type="button" className="text-teal hover:underline" onClick={() => fill(project)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="text-danger hover:underline"
                        onClick={() => onDelete(project.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
            </>
            ) : null}
            {section === "pages" ? (
              <PagesEditor
                pages={data.pages}
                password={password}
                onSaved={async () => {
                  await router.invalidate();
                }}
              />
            ) : null}
            {section === "contact" ? (
              <ContactEditor
                contact={data.contact}
                password={password}
                onSaved={async () => {
                  await router.invalidate();
                }}
              />
            ) : null}
            {section === "about" ? (
              <AboutEditor
                portrait={data.portrait}
                skills={data.skills}
                password={password}
                onSaved={async () => {
                  await router.invalidate();
                }}
              />
            ) : null}
          </>
        ) : null}
      </main>
    </>
  );
}

function fieldClass() {
  return "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-teal";
}

function PagesEditor({
  pages,
  password,
  onSaved,
}: {
  pages: SitePage[];
  password: string;
  onSaved: () => Promise<void>;
}) {
  const empty = { title: "", slug: "", body: "" };
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      await savePage({ data: { id: editing ?? undefined, ...form, password } });
      setForm(empty);
      setEditing(null);
      await onSaved();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not save that page.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="panel mt-8 space-y-4 rounded-2xl p-6">
        <p className="text-muted">
          A new page is added to the menu. The address is the short link, like notes or services.
        </p>
        <label className="block">
          <span className="mb-1 block text-sm text-muted">Title</span>
          <input
            required
            value={form.title}
            onChange={(event) => setForm({ ...form, title: event.target.value })}
            className={fieldClass()}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-muted">Address</span>
          <input
            value={form.slug}
            onChange={(event) => setForm({ ...form, slug: event.target.value })}
            className={fieldClass()}
            placeholder="my-page"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-muted">Page text</span>
          <textarea
            required
            rows={8}
            value={form.body}
            onChange={(event) => setForm({ ...form, body: event.target.value })}
            className={fieldClass()}
          />
        </label>
        {error ? <p className="text-sm text-danger">{error}</p> : null}
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-copper disabled:opacity-60"
          >
            {editing ? "Save page" : "Add page"}
          </button>
          {editing ? (
            <button
              type="button"
              className="rounded-full border border-line px-6 py-3"
              onClick={() => {
                setEditing(null);
                setForm(empty);
              }}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </form>
      <ul className="mt-8 space-y-4">
        {pages.length === 0 ? <li className="text-muted">No extra pages yet.</li> : null}
        {pages.map((page) => (
          <li key={page.id} className="panel rounded-2xl p-5">
            <h2 className="text-xl font-bold">{page.title}</h2>
            <p className="mt-1 text-sm text-muted">/{page.slug}</p>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                className="text-teal hover:underline"
                onClick={() => {
                  setEditing(page.id);
                  setForm({ title: page.title, slug: page.slug, body: page.body });
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="text-danger hover:underline"
                onClick={() => {
                  void deletePage({ data: { id: page.id, password } })
                    .then(onSaved)
                    .catch((cause: unknown) => {
                      setError(cause instanceof Error ? cause.message : "Could not remove that page.");
                    });
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function ContactEditor({
  contact,
  password,
  onSaved,
}: {
  contact: SiteContact;
  password: string;
  onSaved: () => Promise<void>;
}) {
  const [form, setForm] = useState(contact);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [savedNote, setSavedNote] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    setSavedNote(false);
    try {
      const next = await updateContact({ data: { ...form, password } });
      setForm(next);
      setSavedNote(true);
      await onSaved();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not save contact details.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="panel mt-8 space-y-4 rounded-2xl p-6">
      <p className="text-muted">These details show in the header, contact section, and social icons.</p>
      {(
        [
          ["email", "Email"],
          ["phone", "Phone"],
          ["linkedin", "LinkedIn"],
          ["location", "Location"],
          ["youtube", "YouTube"],
          ["tiktok", "TikTok"],
          ["instagram", "Instagram"],
        ] as const
      ).map(([key, label]) => (
        <label key={key} className="block">
          <span className="mb-1 block text-sm text-muted">{label}</span>
          <input
            required={key === "email" || key === "phone" || key === "location"}
            value={form[key]}
            onChange={(event) => setForm({ ...form, [key]: event.target.value })}
            className={fieldClass()}
          />
        </label>
      ))}
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      {savedNote ? <p className="text-sm text-teal">Contact details saved.</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-copper disabled:opacity-60"
      >
        Save contact
      </button>
    </form>
  );
}

function AboutEditor({
  portrait,
  skills,
  password,
  onSaved,
}: {
  portrait: string;
  skills: SiteSkill[];
  password: string;
  onSaved: () => Promise<void>;
}) {
  const [photo, setPhoto] = useState(portrait);
  const [label, setLabel] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [savedNote, setSavedNote] = useState("");

  function onPick(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Choose an image file.");
      return;
    }
    if (file.size > 1_000_000) {
      setError("Use a photo under 1 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(String(reader.result ?? ""));
      setError("");
      setSavedNote("");
    };
    reader.readAsDataURL(file);
  }

  async function savePhoto(next: string) {
    setPending(true);
    setError("");
    setSavedNote("");
    try {
      const saved = await updatePortrait({ data: { portrait: next, password } });
      setPhoto(saved.portrait);
      setSavedNote(next ? "About photo updated." : "About photo reset.");
      await onSaved();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not save the photo.");
    } finally {
      setPending(false);
    }
  }

  async function onAddSkill(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    setSavedNote("");
    try {
      await saveSkill({ data: { label, note, password } });
      setLabel("");
      setNote("");
      setSavedNote("Skill added.");
      await onSaved();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not add that skill.");
    } finally {
      setPending(false);
    }
  }

  async function onRemoveSkill(id: number) {
    setPending(true);
    setError("");
    try {
      await deleteSkill({ data: { id, password } });
      await onSaved();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not remove that skill.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="mt-8 space-y-8">
      <form
        className="panel space-y-4 rounded-2xl p-6"
        onSubmit={(event) => {
          event.preventDefault();
          void savePhoto(photo);
        }}
      >
        <h2 className="text-xl font-bold">About photo</h2>
        <p className="text-muted">Replace the photo in About Me whenever you want.</p>
        <img
          src={photo || "/portrait.jpg"}
          alt="About preview"
          className="size-28 rounded-full object-cover ring-4 ring-teal"
        />
        <input type="file" accept="image/*" onChange={onPick} className="block text-sm text-muted" />
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={pending || !photo.startsWith("data:image/")}
            className="rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-copper disabled:opacity-60"
          >
            Save photo
          </button>
          <button
            type="button"
            disabled={pending}
            onClick={() => void savePhoto("")}
            className="rounded-full border border-line px-6 py-3 text-ink"
          >
            Use original photo
          </button>
        </div>
      </form>

      <form onSubmit={onAddSkill} className="panel space-y-4 rounded-2xl p-6">
        <h2 className="text-xl font-bold">Skills</h2>
        <p className="text-muted">These appear under About Me, next to Python, Excel, and SQL.</p>
        <label className="block">
          <span className="mb-1 block text-sm text-muted">Skill</span>
          <input value={label} onChange={(event) => setLabel(event.target.value)} required className={fieldClass()} placeholder="Power BI" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-muted">Short note</span>
          <input value={note} onChange={(event) => setNote(event.target.value)} className={fieldClass()} placeholder="Dashboards" />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-teal px-6 py-3 font-medium text-white transition hover:bg-copper disabled:opacity-60"
        >
          Add skill
        </button>
        <ul className="space-y-3">
          {skills.map((skill) => (
            <li key={skill.id} className="flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3">
              <span>
                <span className="font-semibold">{skill.label}</span>
                {skill.note ? <span className="ml-2 text-sm text-muted">{skill.note}</span> : null}
              </span>
              <button type="button" className="text-danger hover:underline" onClick={() => void onRemoveSkill(skill.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </form>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      {savedNote ? <p className="text-sm text-teal">{savedNote}</p> : null}
    </div>
  );
}

