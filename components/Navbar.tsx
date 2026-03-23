"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about" },
    { name: "Speisekarte", href: "/speisekarte" },
    { name: "Galerie", href: "/gallery" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-black/5 transition-all duration-300 ${
          scrolled
            ? "bg-[#f7f1e8]/95 shadow-md backdrop-blur-md"
            : "bg-[#f7f1e8]/80 backdrop-blur-sm"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 transition-all duration-300 ${
            scrolled ? "py-2.5" : "py-3.5"
          }`}
        >
          {/* LOGO + NAME */}
          <Link href="/" className="group flex items-center gap-3 sm:gap-4">
            <div
              className={`relative overflow-hidden rounded-2xl border border-black/10 shadow-sm transition-all duration-300 ${
                scrolled
                  ? "h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-36"
                  : "h-14 w-28 sm:h-16 sm:w-32 md:h-20 md:w-44"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Zur kleinen Küche Logo"
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.04]"
                priority
              />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className={`font-brand text-[#2a211b] transition duration-300 group-hover:text-[#8a6b52] ${
                  scrolled
                    ? "text-2xl sm:text-3xl md:text-4xl"
                    : "text-3xl sm:text-4xl md:text-5xl"
                }`}
              >
                Zur kleinen Küche
              </span>
              <span className="font-heading mt-1 text-[9px] uppercase tracking-[0.28em] text-[#8a6b52] sm:text-[10px] md:text-xs">
                
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-heading text-[15px] transition duration-300 ${
                    isActive
                      ? "text-[#8a6b52]"
                      : "text-[#1f1a17] hover:text-[#8a6b52]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-[#8a6b52] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm lg:hidden"
          >
            <span
              className={`absolute h-0.5 w-5 bg-black transition ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-black transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-black transition ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 transition ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* MOBILE MENU */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[80%] max-w-sm bg-[#f7f1e8] shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-b border-black/5 p-5">
          <span className="font-brand text-3xl text-[#2a211b]">
            Zur kleinen Küche
          </span>
        </div>

        <nav className="flex flex-col p-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3 font-heading text-lg transition ${
                  isActive
                    ? "bg-[#8a6b52]/10 text-[#8a6b52]"
                    : "hover:bg-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}