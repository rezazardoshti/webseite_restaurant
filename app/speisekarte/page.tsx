"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    title: "Suppen",
    items: [
      { name: "1. Gulaschsuppe", price: "€ 9.50" },
      { name: "2. Tomatensuppe", price: "€ 5.50" },
    ],
  },
  {
    title: "Salate",
    items: [
      { name: "3. Salatteller mit Hähnchenbrust", price: "€ 12.50" },
      { name: "4. Salatteller", price: "€ 9.90" },
      { name: "5. Salatteller mit Garnelen", price: "€ 15.40" },
    ],
  },
  {
    title: "Gerichte aus der kleinen Küche",
    items: [
      { name: "6. Flammkuchen vegetarisch", price: "€ 9.50" },
      { name: "7. Flammkuchen klassisch mit Speck und Zwiebeln", price: "€ 8.50" },
      { name: "8. Flammkuchen mit Lachs", price: "€ 11.50" },
    ],
  },
  {
    title: "Schnitzelgerichte",
    items: [
      { name: "9. Champignon-Schnitzel mit Pommes und Salat", price: "€ 16.30" },
      { name: "10. Zwiebel-Schnitzel mit Pommes und Salat", price: "€ 16.30" },
      { name: "11. Hollandaise-Schnitzel mit Pommes und Salat", price: "€ 16.30" },
      { name: "12. Paprika-Schnitzel mit Pommes und Salat", price: "€ 15.80" },
      { name: "13. Jäger-Schnitzel mit Pommes und Salat", price: "€ 15.80" },
      { name: "14. Schnitzel Wiener Art mit Pommes und Salat", price: "€ 14.50" },
    ],
  },
  {
    title: "Fleischgerichte",
    items: [
      { name: "15. Hähnchenbrust mit Pommes und Salat", price: "€ 14.50" },
      { name: "16. Leberkäse mit Spiegelei, Bratkartoffeln und Salat", price: "€ 14.50" },
      { name: "17. Sülze mit Bratkartoffeln und Salat", price: "€ 10.50" },
    ],
  },
  {
    title: "Fischgerichte",
    items: [
      { name: "18. Lachs mit Sauce Hollandaise, Röstitalern und Salat", price: "€ 15.50" },
      { name: "19. Matjes mit Bratkartoffeln und Salat", price: "€ 14.50" },
      { name: "20. Seelachs mit Röstitalern und Salat", price: "€ 12.90" },
    ],
  },
  {
    title: "Nudelgerichte",
    items: [
      { name: "21. Nudeln mit Champignon-Rahmsauce und Lachs", price: "€ 15.90" },
      { name: "22. Nudeln mit Champignon-Rahmsauce und Hähnchen", price: "€ 13.90" },
      { name: "23. Nudeln mit Champignon-Rahmsauce", price: "€ 11.90" },
    ],
  },
  {
    title: "Spargelgerichte",
    items: [
      {
        name: "Spargel mit Schnitzel",
        description: "Frischer Spargel, Schnitzel, Sauce Hollandaise & Kartoffeln",
        price: "€ 18.90",
      },
      {
        name: "Stangenspargel mit Sauce Hollandaise",
        description: "Frischer Spargel mit Sauce Hollandaise & Kartoffeln",
        price: "€ 15.50",
      },
      {
        name: "Spargel mit Schinken",
        description: "Frischer Spargel mit Kochschinken, Sauce Hollandaise & Kartoffeln",
        price: "€ 17.50",
      },
      {
        name: "Spargel mit Lachs",
        description: "Frischer Spargel mit Lachsfilet, Sauce Hollandaise & Rösti",
        price: "€ 18.90",
      },
      {
        name: "Spargelcremesuppe",
        description: "Cremige Suppe aus frischem Spargel",
        price: "€ 5.90",
      },
    ],
  },
  {
    title: "Für unsere kleinen Gäste",
    items: [
      { name: "24. Nudeln mit Tomatensauce", price: "€ 6.50" },
      { name: "25. Nuggets (6 Stück)", price: "€ 6.50" },
    ],
  },
  {
    title: "Klassiker",
    items: [
      { name: "26. Cheeseburger", price: "€ 9.90" },
      { name: "27. Hamburger", price: "€ 9.50" },
      { name: "28. Manta-Platte", price: "€ 7.60" },
      { name: "29. Bockwurst mit Kartoffelsalat", price: "€ 6.20" },
      { name: "30. Hot Dog", price: "€ 5.20" },
      { name: "31. Currywurst", price: "€ 4.10" },
      { name: "32. Frikadelle", price: "€ 3.70" },
      { name: "33. Bratwurst", price: "€ 3.20" },
    ],
  },
  {
    title: "Beilagen",
    items: [
      { name: "Große Pommes", price: "€ 5.20" },
      { name: "kleine Pommes", price: "€ 2.60" },
      { name: "Röstitaler", price: "€ 2.60" },
      { name: "Beilagensalat", price: "€ 3.70" },
      { name: "Kartoffelsalat", price: "€ 3.70" },
      { name: "Bratkartoffeln", price: "€ 3.70" },
    ],
  },
  {
    title: "Extras / Saucen",
    items: [
      { name: "Champignonsauce", price: "€ 1.80" },
      { name: "Sauce Hollandaise", price: "€ 1.80" },
      { name: "Paprikasauce", price: "€ 1.80" },
      { name: "Jägersauce", price: "€ 1.80" },
      { name: "Salat-Mayonnaise", price: "€ 0.90" },
      { name: "Curry-Ketchup", price: "€ 0.90" },
    ],
  },
  {
    title: "Getränke",
    items: [
      { name: "Cola", price: "€ 2.70" },
      { name: "Cola Zero", price: "€ 2.70" },
      { name: "Cola Light", price: "€ 2.70" },
      { name: "Fanta", price: "€ 2.70" },
      { name: "Sprite", price: "€ 2.70" },
      { name: "Vitamalz", price: "€ 2.70" },
      { name: "Pils / Pils alkoholfrei", price: "€ 2.70" },
      { name: "Radler / Radler alkoholfrei", price: "€ 2.70" },
      { name: "Wasser still / spritzig", price: "€ 2.70" },
      { name: "Eistee Zitrone / Pfirsich", price: "€ 2.90" },
      { name: "Apfelschorle", price: "€ 2.90" },
    ],
  },
  {
    title: "Kaffee & Heißgetränke",
    items: [
      { name: "Kaffee", price: "€ 2.60" },
      { name: "Milchkaffee", price: "€ 2.90" },
      { name: "Cappuccino", price: "€ 2.90" },
      { name: "Cappuccino mit Schoko", price: "€ 2.90" },
      { name: "Latte Macchiato", price: "€ 2.90" },
      { name: "Tee", price: "€ 2.00" },
    ],
  },
];

export default function SpeisekartePage() {
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
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
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
              Speisekarte
            </p>

            <h1 className="font-heading mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Unsere Gerichte
              <span className="font-brand mt-3 block text-5xl leading-none text-[#8a6b52] sm:text-6xl md:text-7xl">
                mit echter Auswahl
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#4e433b] sm:text-base sm:leading-8">
              
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {menuSections.map((section, index) => (
              <article
                key={section.title}
                data-reveal
                className={`reveal rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                  index % 3 === 0
                    ? "reveal-delay-1"
                    : index % 3 === 1
                    ? "reveal-delay-2"
                    : "reveal-delay-3"
                }`}
              >
                <div className="mb-5 border-b border-[#8a6b52]/15 pb-4">
                  <p className="font-heading text-[11px] uppercase tracking-[0.28em] text-[#8a6b52] sm:text-xs">
                    Kategorie
                  </p>
                  <h2 className="font-heading mt-2 text-2xl font-semibold leading-tight text-[#1f1a17] sm:text-3xl">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={`${section.title}-${item.name}`}
                      className="flex items-start justify-between gap-4 border-b border-black/5 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="pr-2">
                        <p className="text-sm leading-6 text-[#3f352e] sm:text-[15px]">
                          {item.name}
                        </p>

                        {section.title === "Spargelgerichte" && item.description && (
                          <p className="mt-1 text-xs leading-5 text-[#6b5f57] sm:text-sm">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <span className="shrink-0 rounded-full bg-[#8a6b52]/10 px-3 py-1 text-sm font-medium text-[#8a6b52]">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div
            data-reveal
            className="reveal mt-12 mx-auto max-w-5xl rounded-[2rem] border border-black/5 bg-[#1f1a17] px-6 py-10 text-center text-white shadow-[0_20px_60px_rgba(31,26,23,0.18)] sm:px-10 sm:py-12"
          >
            <h2 className="font-heading mt-4 text-3xl font-semibold sm:text-4xl">
              Lassen Sie sich verwöhnen
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-[15px] sm:leading-8">
              Entdecken Sie unsere Auswahl und genießen Sie eine Küche, die mit
              Liebe zum Detail und einem Gespür für Geschmack zubereitet wird.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}