"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AboutPage() {
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
        <section className="pt-[120px] sm:pt-36 lg:pt-40 px-4 sm:px-6 md:px-10 lg:px-16 pb-12">
          <div className="mx-auto max-w-5xl text-center">
            
            <p
              data-reveal
              className="reveal font-heading text-[11px] uppercase tracking-[0.3em] text-[#8a6b52]"
            >
              Über uns
            </p>

            <h1
              data-reveal
              className="reveal reveal-delay-1 font-heading mt-4 text-4xl sm:text-5xl md:text-6xl"
            >
              Ein Ort für
              <span className="font-brand block text-[#8a6b52]">
                Genuss & Wärme
              </span>
            </h1>

            <p
              data-reveal
              className="reveal reveal-delay-2 mt-6 text-[#4e433b] leading-7 max-w-2xl mx-auto"
            >
              Zur kleinen Küche steht für ehrliche Küche, gemütliche Atmosphäre
              und einen Ort, an dem man sich willkommen fühlt — vom ersten Blick
              bis zum letzten Moment.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

            <div data-reveal className="reveal">
              <Image
                src="/H1.png"
                alt="Restaurant Atmosphäre"
                width={600}
                height={700}
                className="rounded-3xl shadow-lg"
              />
            </div>

            <div data-reveal className="reveal reveal-delay-1">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
                Unsere Geschichte
              </h2>

              <p className="mt-6 text-[#4e433b] leading-7">
                Was als Idee begann, ist heute ein Ort geworden, an dem Menschen
                zusammenkommen, genießen und den Alltag für einen Moment
                vergessen können.
              </p>

              <p className="mt-4 text-[#6a5a4e] leading-7">
                Mit viel Liebe zum Detail, frischen Zutaten und einer warmen
                Atmosphäre möchten wir jedem Besuch eine besondere Note geben.
              </p>
            </div>
          </div>
        </section>

        {/* PHILOSOPHIE */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-16">
          <div className="mx-auto max-w-5xl text-center">

            <h2
              data-reveal
              className="reveal font-heading text-3xl sm:text-4xl md:text-5xl"
            >
              Unsere Philosophie
            </h2>

            <p
              data-reveal
              className="reveal reveal-delay-1 mt-6 text-[#4e433b] leading-7"
            >
              Wir glauben, dass gutes Essen mehr ist als nur Geschmack. Es ist
              ein Erlebnis, das Atmosphäre, Service und Details verbindet.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              
              <div
                data-reveal
                className="reveal reveal-delay-1 rounded-2xl bg-white p-5 shadow"
              >
                <h3 className="font-heading text-xl">Frische</h3>
                <p className="mt-2 text-sm text-[#4e433b]">
                  Hochwertige Zutaten stehen bei uns im Mittelpunkt.
                </p>
              </div>

              <div
                data-reveal
                className="reveal reveal-delay-2 rounded-2xl bg-white p-5 shadow"
              >
                <h3 className="font-heading text-xl">Herzlichkeit</h3>
                <p className="mt-2 text-sm text-[#4e433b]">
                  Gäste sollen sich bei uns wie zuhause fühlen.
                </p>
              </div>

              <div
                data-reveal
                className="reveal reveal-delay-3 rounded-2xl bg-white p-5 shadow"
              >
                <h3 className="font-heading text-xl">Qualität</h3>
                <p className="mt-2 text-sm text-[#4e433b]">
                  Jede Speise wird mit Sorgfalt und Stil serviert.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 pb-20">
          <div
            data-reveal
            className="reveal mx-auto max-w-4xl rounded-3xl bg-[#1f1a17] p-8 text-center text-white shadow-xl"
          >
            <h2 className="font-heading text-3xl sm:text-4xl">
              Besuchen Sie uns
            </h2>

            <p className="mt-4 text-white/80">
              Wir freuen uns darauf, Sie persönlich bei uns begrüßen zu dürfen.
            </p>

            <div className="mt-6">
              <a
                href="/kontakt"
                className="inline-block rounded-full bg-[#8a6b52] px-6 py-3"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}