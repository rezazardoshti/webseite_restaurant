"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function KontaktPage() {
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
        <section className="px-4 pb-10 pt-[120px] sm:px-6 sm:pt-36 md:px-10 lg:px-16 lg:pb-14 lg:pt-40">
          <div className="mx-auto max-w-4xl text-center" data-reveal>
            <p className="font-heading text-[11px] uppercase tracking-[0.32em] text-[#8a6b52] sm:text-xs">
              Kontakt
            </p>

            <h1 className="font-heading mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Wir freuen uns auf
              <span className="font-brand mt-3 block text-5xl leading-none text-[#8a6b52] sm:text-6xl md:text-7xl">
                Ihren Besuch
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#4e433b] sm:text-base sm:leading-8">
              Ob Fragen, Reservierungen oder ein kurzer Gruß — wir sind gern für Sie da
              und freuen uns darauf, von Ihnen zu hören.
            </p>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 md:px-10 lg:px-16 lg:pb-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div
              data-reveal
              className="reveal rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8"
            >
              <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-[#8a6b52] sm:text-xs">
                Kontaktinformationen
              </p>

              <h2 className="font-heading mt-3 text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                So erreichen Sie uns
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#fbf7f1] p-5">
                  <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-[#8a6b52]">
                    Adresse
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#4e433b] sm:text-[15px]">
                    Kaiserstraße 11
                    <br />
                    59505 Bad Sassendorf
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#fbf7f1] p-5">
                  <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-[#8a6b52]">
                    Telefon
                  </p>
                  <a
                    href="tel:+4929215595658"
                    className="mt-3 block text-sm leading-7 text-[#4e433b] transition hover:text-[#8a6b52] sm:text-[15px]"
                  >
                    +49 2921 5595658
                  </a>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#fbf7f1] p-5">
                  <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-[#8a6b52]">
                    E-Mail
                  </p>
                  <a
                    href="mailto:info@zurkleinenkueche.de"
                    className="mt-3 block text-sm leading-7 text-[#4e433b] transition hover:text-[#8a6b52] sm:text-[15px]"
                  >
                    zurkleinenkueche@gmail.com
                  </a>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#fbf7f1] p-5">
                  <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-[#8a6b52]">
                    Öffnungszeiten
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#4e433b] sm:text-[15px]">
                    Täglich geöffnet
                    <br />
                    11:00 - 20:00 Uhr
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[#1f1a17] p-6 text-white">
                <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-white/70 sm:text-xs">
                  Hinweis
                </p>
                <p className="mt-3 text-sm leading-7 text-white/85 sm:text-[15px]">
                  Reservierungen und aktuelle Informationen nehmen wir gern direkt
                  telefonisch oder per E-Mail entgegen.
                </p>
              </div>
            </div>

            <div
              data-reveal
              className="reveal reveal-delay-2 rounded-[2rem] border border-black/5 bg-white/80 p-3 shadow-sm backdrop-blur"
            >
              <div className="overflow-hidden rounded-[1.6rem] border border-black/5 bg-[#fbf7f1]">
                <div className="border-b border-black/5 px-5 py-4 sm:px-6">
                  <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-[#8a6b52] sm:text-xs">
                    Anfahrt
                  </p>
                  <h2 className="font-heading mt-2 text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                    Hier finden Sie uns
                  </h2>
                </div>

                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Google Maps - Zur kleinen Küche"
                    src="https://www.google.com/maps?q=Bad%20Sassendorf%20Kaiserstra%C3%9Fe%2011&z=16&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="px-5 py-5 sm:px-6">
                  <p className="text-sm leading-7 text-[#4e433b] sm:text-[15px]">
                    Zentral in Bad Sassendorf gelegen und gut erreichbar.
                    Wir freuen uns darauf, Sie persönlich bei uns willkommen zu heißen.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Bad+Sassendorf+Kaiserstraße+11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#8a6b52] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Route planen
                    </a>

                    <Link
                      href="/speisekarte"
                      className="inline-flex items-center justify-center rounded-full border border-[#1f1a17]/15 bg-white px-6 py-3 text-sm font-medium text-[#1f1a17] transition duration-300 hover:bg-[#f9f5ef] hover:shadow-md"
                    >
                      Zur Speisekarte
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 md:px-10 lg:px-16">
          <div
            data-reveal
            className="reveal mx-auto max-w-5xl rounded-[2rem] border border-black/5 bg-[#1f1a17] px-6 py-10 text-center text-white shadow-[0_20px_60px_rgba(31,26,23,0.18)] sm:px-10 sm:py-12"
          >
            <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-white/70 sm:text-xs">
              Herzlich willkommen
            </p>

            <h2 className="font-heading mt-4 text-3xl font-semibold sm:text-4xl">
              Wir freuen uns auf Sie
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-[15px] sm:leading-8">
              Genießen Sie entspannte Momente, gutes Essen und eine Atmosphäre,
              in der man sich gern wohlfühlt.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}