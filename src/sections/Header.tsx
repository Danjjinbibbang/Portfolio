function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-20 p-4 fixed top-0 left-0 right-0 bg-white shadow-lg z-1000">
      <div className="flex w-1/3 text-xl font-bold cursor-pointer">
        HDB&apos;s Portfolio
      </div>
      <div className="flex w-1/3.5">
        <a
          href="#aboutme"
          className="px-4 py-2 cursor-pointer hover:text-red-500 transition-colors duration-300"
        >
          About me
        </a>
        <a
          href="#skills"
          className="px-4 py-2 cursor-pointer hover:text-red-500 transition-colors duration-300"
        >
          Skills
        </a>
        <a
          href="#archiving"
          className="px-4 py-2 cursor-pointer hover:text-red-500 transition-colors duration-300"
        >
          Archiving
        </a>
        <a
          href="#project"
          className="px-4 py-2 cursor-pointer hover:text-red-500 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#career"
          className="px-4 py-2 cursor-pointer hover:text-red-500 transition-colors duration-300"
        >
          Career
        </a>
      </div>
    </header>
  );
}

export default Header;
