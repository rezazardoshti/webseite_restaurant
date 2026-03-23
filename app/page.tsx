"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="menu-bg text-[#1f1a17]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[120px] sm:pt-36 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-6 sm:px-6 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:pb-24">
            <div data-reveal className="reveal max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-[#8a6b52]/15 bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#8a6b52] shadow-sm backdrop-blur sm:text-xs">
                Bad Sassendorf • herzlich • modern
              </div>

              <h1 className="font-heading mt-5 text-balance text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-6xl xl:text-7xl">
                Willkommen bei
                <span className="font-brand mt-3 block text-5xl leading-none text-[#8a6b52] sm:text-6xl md:text-7xl">
                  Zur kleinen Küche
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#4e433b] sm:text-base sm:leading-8 md:text-lg">
                Ein Ort zum Ankommen, Genießen und Wohlfühlen. Bei uns treffen
                ehrliche Küche, freundliche Atmosphäre und liebevolle Details
                aufeinander.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#6a5a4e] sm:text-[15px]">
                Ob entspanntes Mittagessen, gemütlicher Abend oder ein kurzer
                Blick auf unsere Speisekarte — schon der erste Eindruck soll
                warm, stilvoll und einladend wirken.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/speisekarte"
                  className="inline-flex items-center justify-center rounded-full border border-[#1f1a17]/15 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1a17] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  Speisekarte entdecken
                </Link>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full border border-[#1f1a17]/15 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1a17] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  Kontakt & Anfahrt
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div
                  data-reveal
                  className="reveal reveal-delay-1 rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <p className="font-heading text-[10px] uppercase tracking-[0.25em] text-[#8a6b52] sm:text-xs">
                    Atmosphäre
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#4e433b]">
                    Ruhig, freundlich und einladend
                  </p>
                </div>

                <div
                  data-reveal
                  className="reveal reveal-delay-2 rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <p className="font-heading text-[10px] uppercase tracking-[0.25em] text-[#8a6b52] sm:text-xs">
                    Küche
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#4e433b]">
                    Frisch zubereitet mit Gefühl
                  </p>
                </div>

                <div
                  data-reveal
                  className="reveal reveal-delay-3 rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <p className="font-heading text-[10px] uppercase tracking-[0.25em] text-[#8a6b52] sm:text-xs">
                    Adresse
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#4e433b]">
                    Kaiserstraße 11, Bad Sassendorf
                  </p>
                </div>
              </div>
            </div>

            <div data-reveal className="reveal reveal-delay-2 relative z-10">
              <div className="relative mx-auto w-full max-w-md sm:max-w-xl lg:ml-auto lg:max-w-2xl">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-[#8a6b52]/10 bg-white/30 backdrop-blur-sm" />

                <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#f6efe5] p-3 shadow-[0_20px_80px_rgba(60,40,20,0.12)]">
                  <div className="overflow-hidden rounded-[1.6rem] border border-black/5 bg-white shadow-sm">
                    <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]">
                      <Image
                        src="/H1.png"
                        alt="Atmosphäre im Restaurant Zur kleinen Küche"
                        fill
                        priority
                        className="object-cover transition duration-700 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a17]/35 via-[#1f1a17]/10 to-white/10" />

                      
                    </div>
                  </div>
                </div>

                <div
                  data-reveal
                  className="reveal reveal-delay-3 absolute -bottom-4 right-3 rounded-2xl border border-black/5 bg-white/85 px-4 py-3 shadow-lg backdrop-blur animate-float sm:-bottom-6 sm:right-6"
                >
                  <p className="font-heading text-[10px] uppercase tracking-[0.25em] text-[#8a6b52] sm:text-xs">
                    Öffnungszeiten
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#1f1a17] sm:text-base">
                    Täglich mit Genussmomenten <br/>
                    Montag-Sonntag <br/>
                    11:00 - 20:00 Uhr
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal className="reveal pb-8 text-center">
            <span className="inline-flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#8a6b52] sm:text-xs">
              Mehr entdecken
              <span className="h-8 w-px bg-[#8a6b52]/50 animate-pulse" />
            </span>
          </div>
        </section>

        {/* ÜBER UNS */}
        <section className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div data-reveal className="reveal reveal-delay-1 order-2 lg:order-1">
              <div className="relative mx-auto max-w-md lg:mx-0">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-[#8a6b52]/10 bg-white/30 backdrop-blur-sm" />
                <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/70 p-3 shadow-[0_20px_60px_rgba(60,40,20,0.08)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/H4.png"
                      alt="Zur kleinen Küche Atmosphäre"
                      fill
                      className="object-cover transition duration-700 hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a17]/25 via-transparent to-white/10" />
                  </div>
                </div>
              </div>
            </div>

            <div data-reveal className="reveal reveal-delay-2 order-1 lg:order-2">
              <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-[#8a6b52] sm:text-xs">
                Über uns
              </p>

              <h2 className="font-heading mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Ein Ort für guten Geschmack
                <span className="font-brand mt-3 block text-4xl leading-none text-[#8a6b52] sm:text-5xl md:text-6xl">
                  und schöne Momente
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#4e433b] sm:text-base sm:leading-8">
                Bei Zur kleinen Küche möchten wir mehr als nur Speisen anbieten.
                Wir möchten einen Ort schaffen, an dem man gern ankommt, sich
                wohlfühlt und eine angenehme Zeit verbringt.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#6a5a4e] sm:text-[15px]">
                Unser Stil verbindet Herzlichkeit, Genuss und eine ruhige
                Atmosphäre — modern präsentiert und mit einem Auftritt, der auf
                jedem Bildschirm freundlich und hochwertig wirkt.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-[#1f1a17]/15 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1a17] transition duration-300 hover:bg-white hover:shadow-md"
                >
                  Mehr über uns
                </Link>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full border border-[#1f1a17]/15 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1a17] transition duration-300 hover:bg-white hover:shadow-md"
                >
                  Jetzt kontaktieren
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SPEISEKARTE */}
        <section className="relative px-4 pb-16 pt-4 sm:px-6 sm:pb-20 md:px-10 lg:px-16 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal text-center">
              <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-[#8a6b52] sm:text-xs">
                Speisekarte
              </p>

              <h2 className="font-heading mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Unsere Küche lädt ein
                <span className="font-brand mt-3 block text-4xl leading-none text-[#8a6b52] sm:text-5xl md:text-6xl">
                  zum Entdecken
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#4e433b] sm:text-base sm:leading-8">
                Frische Zutaten, liebevolle Zubereitung und ein Stil, der Genuss
                und Gemütlichkeit verbindet. Entdecke eine Auswahl, die Appetit
                macht und Lust auf mehr weckt.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Vorspeisen",
                  text: "Kleine Köstlichkeiten, die den ersten Eindruck besonders machen.",
                },
                {
                  title: "Hauptgerichte",
                  text: "Herzhaft, frisch und mit einer warmen Handschrift zubereitet.",
                },
                {
                  title: "Desserts",
                  text: "Feine Momente für alle, die das Essen stilvoll abrunden möchten.",
                },
                {
                  title: "Getränke",
                  text: "Von erfrischend bis gemütlich — die passende Begleitung für jeden Anlass.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  data-reveal
                  className={`reveal rounded-[1.75rem] border border-black/5 bg-white/75 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index === 0
                      ? "reveal-delay-1"
                      : index === 1
                      ? "reveal-delay-2"
                      : "reveal-delay-3"
                  }`}
                >
                  <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-[#8a6b52]">
                    {item.title}
                  </p>
                  <h3 className="font-heading mt-3 text-2xl font-semibold text-[#1f1a17]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4e433b]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div data-reveal className="reveal mt-10 text-center">
              <Link
                href="/speisekarte"
                className="inline-flex items-center justify-center rounded-full bg-[#8a6b52] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Zur Speisekarte
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}