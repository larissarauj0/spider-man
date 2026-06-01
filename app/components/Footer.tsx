/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <footer className="mt-25 min-w-full border-t border-white/10 bg-[#0B1322] px-6 py-4 text-white sm:px-8">
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:items-center">
        
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <img
            src="/images/logo2.png"
            alt="Spider-Man"
            className="w-28 sm:w-32"
          />

          <p className="mt-1 max-w-75 text-xs text-gray-400">
            © 2026 Spider-Man: Miles Morales.
            Todos os direitos reservados.
          </p>
        </div>

    
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href="#"
            className="transition hover:text-[#EC1F1D]"
          >
            Instagram
          </a>

          <a
            href="#"
            className="transition hover:text-[#EC1F1D]"
          >
            YouTube
          </a>

          <a
            href="#"
            className="transition hover:text-[#EC1F1D]"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;