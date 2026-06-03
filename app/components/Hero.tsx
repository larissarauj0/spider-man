"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-6 pt-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Imagem - mobile primeiro */}
        <motion.img
          src="/images/spiderman.png"
          alt="Miles Morales"
          className="
    order-1
    relative

    w-[95vw]
    max-w-105
    sm:max-w-125
translate-x-8
md:translate-x-40
  lg:translate-x-15    

    lg:order-2
    lg:w-162.5
    lg:max-w-none
  "
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />

        {/* Texto */}
        <div
          className="
            order-2
            mt-8
            flex
            w-full
            flex-col
            items-center
            text-center
            lg:order-1
            lg:mt-0
            lg:w-2/4
          "
        >
          <img
            className="mb-4 w-55 sm:w-70 lg:w-auto"
            src="/images/logo2.png"
            alt="Logo"
          />

          <p className="max-w-150 text-sm leading-7 text-white sm:text-base">
            Miles Morales é o mais novo Homem-Aranha de Nova York da Marvel.
            Após a morte prematura de seu pai, Miles foi apresentado a Peter
            Parker, que rapidamente se tornou seu amigo e mentor. Quando Miles
            foi picado por uma aranha geneticamente modificada da Oscorp, ele
            desenvolveu poderes únicos e, após meses de insistência, Peter
            concordou em treiná-lo.
          </p>

          <button className="mt-6 h-14 w-68 rounded-lg bg-[#EC1F1D] font-medium text-white transition hover:bg-[#d31a1a]">
            COMPRAR INGRESSOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
