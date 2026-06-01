"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      
      <motion.img
        src="/images/spiderman.png"
        alt="Miles Morales"
        className="absolute right-0 bottom-0 w-162.5 z-10"
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      
      <div className="relative z-20 flex justify-center items-center flex-col gap-4 mt-48 ml-10 w-2/4 text-center">
        <img
          className="flex items-center justify-center"
          src="/images/logo2.png"
          alt="Logo"
        />

        <p>
          Miles Morales é o mais novo Homem-Aranha de Nova York da
          Marvel. Após a morte prematura de seu pai, Miles foi
          apresentado a Peter Parker, que rapidamente se tornou seu
          amigo e mentor. Quando Miles foi picado por uma aranha
          geneticamente modificada da Oscorp, ele desenvolveu poderes
          únicos e, após meses de insistência, Peter concordou em
          treiná-lo.
        </p>

        <button className="w-68 h-14 bg-[#EC1F1D] rounded-lg cursor-pointer hover:bg-[#d31a1a]">
          COMPRAR INGRESSOS
        </button>
      </div>
    </section>
  );
};

export default Hero;