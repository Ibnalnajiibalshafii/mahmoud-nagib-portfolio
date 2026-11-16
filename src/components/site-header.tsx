import { getContact, listPages, type SiteContact, type SitePage } from "@/lib/site";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { LineChart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#social", label: "Social" },
  { href: "/#contact", label: "Contact" },
] as const;

const fallbackContact: SiteContact = {
  email: "mahmuodnagib9@gmail.com",
  phone: "+254 745 791 267",
  linkedin: "https://www.linkedin.com/in/mahmoudnagib001",
  location: "Nairobi, Kenya",
  youtube: "https://www.youtube.com/@mahmoudnagibmotivation",
  tiktok: "https://www.tiktok.com/@growwithmahmoud",
  instagram: "https://www.instagram.com/grow.withmahmoud",
};

export function SiteHeader({
  contact: givenContact,
  pages: givenPages,
}: {
  contact?: SiteContact;
  pages?: Pick<SitePage, "slug" | "title">[];
}) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(givenContact ?? fallbackContact);
  const [pages, setPages] = useState(givenPages ?? []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    let alive = true;
    void getContact()
      .then((next) => {
        if (alive) setContact(next);
      })
      .catch(() => {});
    void listPages()
      .then((next) => {
        if (alive) setPages(next);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [pathname]);

  function onBrandClick() {
    const bag = window as Window & { __ownerTaps?: number; __ownerTimer?: number };
    window.clearTimeout(bag.__ownerTimer);
    const next = (bag.__ownerTaps ?? 0) + 1;
    bag.__ownerTaps = next;
    if (next >= 5) {
      bag.__ownerTaps = 0;
      void navigate({ to: "/admin" });
      return;
    }
    bag.__ownerTimer = window.setTimeout(() => {
      bag.__ownerTaps = 0;
    }, 8000);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-teal/40 bg-paper shadow-[0_10px_30px_rgba(2,6,23,0.45)]">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4">
        <button
          type="button"
          onClick={onBrandClick}
          className="flex items-center gap-3 font-bold text-ink"
        >
          <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-copper text-white">
            <LineChart aria-hidden="true" className="size-5" />
          </span>
          Mahmoud Nagib
        </button>
        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-ink transition hover:text-teal">
              {link.label}
            </a>
          ))}
          {pages.map((page) => (
            <Link
              key={page.slug}
              to="/p/$slug"
              params={{ slug: page.slug }}
              className="text-ink transition hover:text-teal"
            >
              {page.title}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${contact.email}`}
          className="hidden rounded-full bg-teal px-5 py-2 text-sm font-medium text-white transition hover:bg-copper md:inline-flex"
        >
          Hire me
        </a>
        <button
          type="button"
          className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col border-t border-line px-6 py-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {pages.map((page) => (
            <Link
              key={page.slug}
              to="/p/$slug"
              params={{ slug: page.slug }}
              className="inline-flex min-h-11 items-center text-ink"
              onClick={() => setOpen(false)}
            >
              {page.title}
            </Link>
          ))}
          <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center text-teal">
            Hire me
          </a>
        </nav>
      ) : null}
    </header>
  );
}
