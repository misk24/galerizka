"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-blush-soft"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-16">
        <div className="relative z-10 order-1 flex flex-col items-start">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-mulberry-deep/75">
            Galeriz.ka · Lombok Timur
          </p>

          <h1 className="max-w-[11ch] text-[clamp(3.2rem,8vw,6.8rem)] leading-[0.92] tracking-[-0.045em] text-mulberry-deep">
            Jahitan yang terasa <em className="font-normal">personal.</em>
          </h1>

          <p className="mt-7 max-w-[39rem] text-base leading-relaxed text-black-cherry/80 sm:text-lg">
            Pesan busana sesuai ukuran dan model yang Anda inginkan. Diskusikan
            pilihan desain dan kebutuhan jahitan bersama Galeriz.ka.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="https://wa.link/4u5haz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-mulberry-deep px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black-cherry focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mulberry-deep"
            >
              Konsultasi via WhatsApp
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-mulberry-deep/35 px-6 py-3 text-sm font-semibold text-mulberry-deep transition-colors duration-200 hover:border-mulberry-deep hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mulberry-deep"
            >
              Lihat hasil jahitan
              <ArrowDownRight aria-hidden="true" size={17} />
            </a>
          </div>

          <div className="mt-12 hidden items-center gap-4 border-t border-mulberry-deep/20 pt-5 sm:flex">
            <span className="h-px w-10 bg-dusty-rose" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.18em] text-mulberry-deep/70">
              Jahit busana · Permak pakaian
            </p>
          </div>
        </div>

        <div className="relative order-2 mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-dusty-rose/20">
            <Image
              src="/images/hero/hero.png"
              alt="Karya busana Galeriz.ka"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 52vw"
              quality={85}
              className="object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 -z-0 h-28 w-28 border border-dusty-rose sm:-bottom-6 sm:-left-6 sm:h-40 sm:w-40"
          />
          <p className="mt-4 text-right text-[0.65rem] uppercase tracking-[0.2em] text-mulberry-deep/65">
            Galeriz.ka · Lombok Timur, NTB
          </p>
        </div>
      </div>
    </section>
  );
}
