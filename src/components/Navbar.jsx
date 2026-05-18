const Navbar = () => {
    return(
        <nav className="absolute top-0 left-0 z-50 w-full after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 bg-[#222326] sm:bg-transparent backdrop-blur">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="relative inset-y-0 left-0 flex items-center justify-between sm:hidden">
        {/* Mobile menu button */}
        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center gap-5 justify-center sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img src="/images/zonic_logo.png" alt="Zonic" className="h-25 w-auto object-contain" />
        </div>
        <div className="hidden sm:ml-6 sm:block text-[16px]">
          <div className="flex space-x-4">
            <a href="#" aria-current="page" className="rounded-md px-3 py-2 font-medium text-white">Home</a>
            <a href="#" className="rounded-md px-3 py-2 font-medium text-white-300 hover:bg-white/5 hover:text-white">Phones</a>
            <a href="#" className="rounded-md px-3 py-2 font-medium text-white-300 hover:bg-white/5 hover:text-white">Features</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="#" aria-current="page" className="block rounded-md px-3 py-2 text-base font-medium text-white">Dashboard</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
    </div>
  </el-disclosure>
</nav>
    )
};
export default Navbar;