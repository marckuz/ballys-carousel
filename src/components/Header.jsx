function Header() {
  return (
    <header className="bg-white">
      <div className="flex items-center h-16 px-4 mx-auto max-w-screen-xl gap-8 sm:px-6 lg:px-8">
        <a className="block" href="/">
          <span className="sr-only">Home</span>
          <img src="https://s29.q4cdn.com/580102441/files/design/logo.svg" alt="logo" className="w-full h-full"/>
        </a>

        <div className="flex items-center justify-end flex-1 md:justify-between">
          <nav className="hidden md:block" aria-labelledby="header-navigation">
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>

            <ul className="flex items-center text-sm gap-6">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  News
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button className="block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
