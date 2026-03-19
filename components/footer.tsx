import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#efe4d3] text-[#1f1a17]">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(31,26,23,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#d8c3aa]/30 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#c7ae92]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:gap-12">
          <div>
            <p className="font-heading text-[11px] uppercase tracking-[0.35em] text-[#8a6b52] sm:text-xs">
              Zur kleinen Küche
            </p>

            <h2 className="font-heading mt-4 text-3xl leading-tight sm:text-4xl">
              Warm, stilvoll
              <span className="font-brand mt-2 block text-4xl leading-none text-[#8a6b52] sm:text-5xl">
                und herzlich
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#4e433b] sm:text-[15px]">
              Ein Ort für ehrliche Küche, gemütliche Atmosphäre und einen
              digitalen Auftritt, der auf jedem Gerät ruhig, hochwertig und
              einladend wirkt.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/75 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/75 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V11H8v3h2.2v8h3.3Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="glass-card rounded-[1.75rem] p-6">
            <h3 className="font-heading text-xl font-semibold">Kontakt</h3>

            <div className="mt-5 space-y-3 text-sm leading-7 text-[#4e433b] sm:text-[15px]">
              <p>
                Kaiserstraße 11
                <br />
                59505 Bad Sassendorf
              </p>
              <p>info@zurkleinenkueche.de</p>
              <p>+49 000 0000000</p>
            </div>
          </div>

          <div className="glass-card rounded-[1.75rem] p-6">
            <h3 className="font-heading text-xl font-semibold">Schnelllinks</h3>

            <div className="mt-5 space-y-3 text-sm sm:text-[15px]">
              <Link
                href="/"
                className="block text-[#4e433b] transition duration-300 hover:translate-x-1 hover:text-[#1f1a17]"
              >
                Startseite
              </Link>
              <Link
                href="/about"
                className="block text-[#4e433b] transition duration-300 hover:translate-x-1 hover:text-[#1f1a17]"
              >
                Über uns
              </Link>
              <Link
                href="/speisekarte"
                className="block text-[#4e433b] transition duration-300 hover:translate-x-1 hover:text-[#1f1a17]"
              >
                Speisekarte
              </Link>
              <Link
                href="/kontakt"
                className="block text-[#4e433b] transition duration-300 hover:translate-x-1 hover:text-[#1f1a17]"
              >
                Kontakt
              </Link>
              <Link
                href="/impressum"
                className="block text-[#4e433b] transition duration-300 hover:translate-x-1 hover:text-[#1f1a17]"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block text-[#4e433b] transition duration-300 hover:translate-x-1 hover:text-[#1f1a17]"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-black/5 bg-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-5 text-center text-sm text-[#6c5b50] sm:px-6 md:px-10 lg:px-16 md:flex-row">
          <p>© 2026 Zur kleinen Küche. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}