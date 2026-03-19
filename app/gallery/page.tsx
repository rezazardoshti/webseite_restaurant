"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const images = [
  "/hero_1.jpg",
  "/hero_2.jpg",
  "/hero_1.jpg",
  "/hero_2.jpg",
  "/hero_1.jpg",
  "/hero_2.jpg",
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
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="menu-bg text-[#1f1a17]">
        {/* HEADER */}
        <section className="pt-[120px] sm:pt-36 lg:pt-40 px-4 sm:px-6 md:px-10 lg:px-16 pb-10 text-center">
          <div className="max-w-4xl mx-auto" data-reveal>
            <p className="font-heading text-[11px] uppercase tracking-[0.3em] text-[#8a6b52]">
              Galerie
            </p>

            <h1 className="font-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
              Eindrücke aus der
              <span className="font-brand block text-[#8a6b52]">
                kleinen Küche
              </span>
            </h1>

            <p className="mt-6 text-[#4e433b] max-w-2xl mx-auto">
              Entdecken Sie Impressionen aus unserem Restaurant – von
              gemütlicher Atmosphäre bis zu liebevoll angerichteten Gerichten.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 pb-20">
          <div className="max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {images.map((src, i) => (
              <div
                key={i}
                data-reveal
                className="reveal group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt="Galerie Bild"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Image
                src={selectedImage}
                alt="Großes Bild"
                width={1200}
                height={800}
                className="rounded-2xl object-contain"
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}