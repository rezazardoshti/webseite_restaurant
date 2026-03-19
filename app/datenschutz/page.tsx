"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function DatenschutzPage() {
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
              Datenschutz
            </p>

            <h1 className="font-heading mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Schutz Ihrer
              <span className="font-brand mt-3 block text-5xl leading-none text-[#8a6b52] sm:text-6xl md:text-7xl">
                Daten
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#4e433b] sm:text-base sm:leading-8">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
              informieren wir Sie über die Verarbeitung personenbezogener Daten
              auf unserer Website.
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
                  1. Verantwortliche Stelle
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Zur kleinen Küche
                  <br />
                  Kaiserstraße 11
                  <br />
                  59505 Bad Sassendorf
                  <br />
                  E-Mail: info@zurkleinenkueche.de
                  <br />
                  Telefon: +49 000 0000000
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  2. Erhebung und Speicherung personenbezogener Daten
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Beim Besuch dieser Website werden durch den Hosting-Anbieter
                  automatisch Informationen erfasst. Dazu können insbesondere
                  IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter
                  Browser, Betriebssystem und besuchte Seiten gehören. Diese
                  Daten dienen der technischen Bereitstellung und Sicherheit der
                  Website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  3. Kontaktaufnahme
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Wenn Sie uns per E-Mail oder telefonisch kontaktieren, werden
                  Ihre Angaben zur Bearbeitung Ihrer Anfrage und für mögliche
                  Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne
                  Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  4. Verwendung von Google Maps
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Auf unserer Website kann eine Karte von Google Maps eingebunden
                  sein. Beim Laden der Karte können Daten an Google übertragen
                  werden. Weitere Informationen hierzu finden Sie in den
                  Datenschutzbestimmungen von Google.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  5. Ihre Rechte
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Sie haben das Recht auf Auskunft über Ihre bei uns
                  gespeicherten personenbezogenen Daten sowie auf Berichtigung,
                  Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit.
                  Außerdem haben Sie das Recht, sich bei einer zuständigen
                  Aufsichtsbehörde zu beschweren.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#fbf7f1] p-5">
                  <h3 className="font-heading text-xl font-semibold text-[#1f1a17]">
                    Widerruf Ihrer Einwilligung
                  </h3>
                  <p className="mt-3 text-sm leading-8 sm:text-[15px]">
                    Eine bereits erteilte Einwilligung zur Datenverarbeitung
                    können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#fbf7f1] p-5">
                  <h3 className="font-heading text-xl font-semibold text-[#1f1a17]">
                    Widerspruchsrecht
                  </h3>
                  <p className="mt-3 text-sm leading-8 sm:text-[15px]">
                    Sie können der Verarbeitung Ihrer personenbezogenen Daten
                    jederzeit widersprechen, sofern dafür besondere Gründe
                    vorliegen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  6. Datensicherheit
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Wir verwenden geeignete technische und organisatorische
                  Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder
                  vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen
                  den unbefugten Zugriff Dritter zu schützen.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-[#1f1a17] sm:text-3xl">
                  7. Aktualität und Änderung dieser Datenschutzerklärung
                </h2>
                <p className="mt-4 text-sm leading-8 sm:text-[15px]">
                  Diese Datenschutzerklärung ist aktuell gültig. Durch die
                  Weiterentwicklung unserer Website oder aufgrund geänderter
                  gesetzlicher Vorgaben kann es notwendig werden, diese
                  Datenschutzerklärung anzupassen.
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