const sections = [
  {
    id: "home",
    title: "Home",
    body: "I build clean, reliable web products with a focus on performance, accessibility, and maintainable code.",
  },
  {
    id: "about",
    title: "About",
    body: "I am a frontend-focused developer who enjoys shaping products from early concept through final polish.",
  },
  {
    id: "projects",
    title: "Projects",
    body: "A curated selection of portfolio work with clear goals, technical stack details, and measurable outcomes.",
  },
  {
    id: "skills",
    title: "Skills",
    body: "Core strengths include React, Next.js, TypeScript, UI architecture, responsive design, and testing.",
  },
  {
    id: "experience",
    title: "Experience",
    body: "Hands-on delivery across product teams, collaborating with designers and backend engineers to ship production features.",
  },
  {
    id: "contact",
    title: "Contact",
    body: "Let us connect about freelance work, product partnerships, or full-time opportunities.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--edge)] bg-[var(--surface-overlay)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="#home" className="text-base font-semibold tracking-[0.08em] uppercase">
            Portfolio
          </a>
          <nav aria-label="Top menu">
            <ul className="flex flex-wrap items-center gap-2 text-sm font-medium sm:gap-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    className="menu-link rounded-full px-3 py-1.5 transition-colors duration-200"
                    href={`#${section.id}`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pt-24 pb-12 sm:px-6">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="portfolio-section scroll-mt-24 rounded-3xl border border-[var(--edge)] bg-[var(--surface)] p-8 shadow-[0_20px_45px_rgba(8,20,34,0.2)]"
          >
            {index === 0 ? (
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{section.title}</h1>
            ) : (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.title}</h2>
            )}
            <p className="mt-3 max-w-3xl text-base/7 text-[var(--muted)]">{section.body}</p>
          </section>
        ))}
      </main>

      <footer className="border-t border-[var(--edge)] bg-[var(--surface-overlay)]">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-4 text-sm text-[var(--muted)] sm:px-6">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
