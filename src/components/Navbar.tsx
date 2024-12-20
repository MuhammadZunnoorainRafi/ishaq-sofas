function Navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-purple-500 py-4 px-6 fixed w-full z-10 shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <a
            href="#"
            className="text-white font-bold text-xl flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            My Brand
          </a>

          {/* <div className="flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md px-3 py-1 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="text-white hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
