"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function ImpressumPage() {
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
              Impressum
            </p>

            <h1 className="font-heading mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Rechtliche
              <span className="font-brand mt-3 block text-5xl leading-none text-[#8a6b52] sm:text-6xl md:text-7xl">
                Informationen
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#4e433b] sm:text-base sm:leading-8">
              Hier finden Sie die gesetzlich vorgeschriebenen Angaben zu unserem
              Restaurant.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 md:px-10 lg:px-16">
          <div
            data-reveal
            className="reveal mx-auto max-w-5xl rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8 md:p-10"
          >
            <div className="space-y-8 text-[#4e433b]">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Zur kleinen Küche
                  <br />
                  Kaiserstraße 11
                  <br />
                  59505 Bad Sassendorf
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  Vertreten durch
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Iman Tarfa
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#fbf7f1] p-5">
                  <h3 className="font-heading text-xl font-semibold text-[#1f1a17]">
                    Kontakt
                  </h3>
                  <p className="mt-3 text-sm leading-8 sm:text-[15px]">
                    Telefon: +49 2921 5595658
                    <br />
                    E-Mail: zurkleinenkueche@gmail.com
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#fbf7f1] p-5">
                  <h3 className="font-heading text-xl font-semibold text-[#1f1a17]">
                    Umsatzsteuer
                  </h3>
                  <p className="mt-3 text-sm leading-8 sm:text-[15px]">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                    Umsatzsteuergesetz:
                    <br />
                    DE460701466
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Iman Tarfa
                  <br />
                  Kaiserstraße 11
                  <br />
                  59505 Bad Sassendorf
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  Haftung für Inhalte
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                  möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  Haftung für Links
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  Urheberrecht
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}