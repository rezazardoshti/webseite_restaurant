"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const images = [
  "/cheezburger.png",
  "/H2.png",
  "/Gulaschsuppe.png",
  "/flammen mit lux.png",
  "/Nuddel.png",
  "/Leberkäse mit Spiegelei, Bratkartoffeln und Salat.png",
  "/Tomatensuppe.png",
  "/Salatteller mit Hähnchenbrust.png",
  "/Salatteller.png",
  "/Sülze mit Bratkartoffeln und Salat.png",
  "/Currywurst.png",
  "/H9.png",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="menu-bg text-[#1f1a17] overflow-hidden">
        <style jsx global>{`
          .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition:
              opacity 0.8s ease,
              transform 0.8s ease;
          }

          .reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          .gallery-frame {
            background: linear-gradient(145deg, #f7f1ea, #e8ddd0);
            border: 1px solid rgba(120, 92, 63, 0.18);
            box-shadow:
              0 12px 30px rgba(0, 0, 0, 0.10),
              inset 0 1px 0 rgba(255, 255, 255, 0.7);
          }

          .gallery-inner-frame {
            background: #fffdf9;
            border: 1px solid rgba(120, 92, 63, 0.12);
          }

          .gallery-overlay {
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.08),
              transparent
            );
          }
        `}</style>

        {/* HEADER */}
        <section className="pt-[120px] sm:pt-36 lg:pt-40 px-4 sm:px-6 md:px-10 lg:px-16 pb-12 text-center">
          <div className="max-w-4xl mx-auto reveal" data-reveal>
            <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-[#8a6b52]">
              Galerie
            </p>

            <h1 className="font-heading mt-4 text-4xl sm:text-5xl md:text-6xl leading-tight">
              Eindrücke aus der
              <span className="font-brand block text-[#8a6b52]">
                kleinen Küche
              </span>
            </h1>

            <p className="mt-6 text-[#4e433b] max-w-2xl mx-auto text-sm sm:text-base leading-7">
              Saubere, elegante Darstellung mit Fokus auf Ihre Gerichte.
            </p>
          </div>
        </section>

        {/* CLEAN GRID */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 pb-28">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  data-reveal
                  onClick={() => setSelectedImage(src)}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="reveal group relative w-full text-left transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="gallery-frame rounded-[28px] p-4">
                    <div className="gallery-inner-frame rounded-[20px] p-3">
                      <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden rounded-[16px]">
                        <Image
                          src={src}
                          alt={`Galerie Bild ${i + 1}`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        <div className="gallery-overlay absolute inset-0 opacity-70 group-hover:opacity-100 transition" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-full shadow"
              >
                Schließen
              </button>

              <div className="gallery-frame rounded-[28px] p-4">
                <div className="gallery-inner-frame rounded-[20px] p-3">
                  <Image
                    src={selectedImage}
                    alt="Großes Bild"
                    width={1400}
                    height={900}
                    className="w-full h-auto object-contain rounded-[16px]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}