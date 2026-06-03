/* eslint-disable @next/next/no-img-element */

const Header = () => {
  return (
    <header className="w-full px-6 py-5 text-white">
      <div className="flex items-center justify-between">
        
        <img
          className="h-12 w-8"
          src="/images/logo.png"
          alt="Logo"
        />

        <div className="flex gap-5 text-sm sm:gap-8 md:gap-12">
          <span className="cursor-pointer transition hover:text-[#EC1F1D]">
            Sinopse
          </span>

          <span className="cursor-pointer transition hover:text-[#EC1F1D]">
            Elenco
          </span>

          <span className="cursor-pointer transition hover:text-[#EC1F1D]">
            Fórum
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;