/* eslint-disable @next/next/no-img-element */

const Header = () => {
  return (
    <header className="mt-4 flex h-[56.19px] w-full items-center justify-between px-6 text-sm lg:max-w-240">
      
      <img
        className="flex h-12 w-8 items-center justify-center"
        src="/images/logo.png"
        alt="Logo"
      />

      <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
        <span className="cursor-pointer hover:text-[#EC1F1D]">
          Sinopse
        </span>

        <span className="cursor-pointer hover:text-[#EC1F1D]">
          Elenco
        </span>

        <span className="cursor-pointer hover:text-[#EC1F1D]">
          Forúm
        </span>
      </div>
    </header>
  );
};

export default Header;