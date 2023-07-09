

export default function Navbar() {
  return (
      <nav className="bg-zinc-950/50 backdrop-blur-sm fixed w-full z-20 top-0 left-0 border-b border-zinc-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 px-10 md:px-28">
          <a href="#" className="flex items-center">
              <span className="self-center text-xl text-white uppercase whitespace-nowrap ">
                <svg width="51" height="17" viewBox="0 0 259.18 77.637" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" fill="#ffffff"><path d="M 0.488 77.637 L 0 77.637 L 0 4.395 L 9.277 0 L 9.766 0 L 9.766 36.768 L 36.279 0 L 36.768 0 L 45.361 4.053 L 23.584 33.057 Q 34.365 33.291 40.736 39.105 A 21.062 21.062 0 0 1 41.26 39.6 A 21.457 21.457 0 0 1 47.386 51.462 A 30.808 30.808 0 0 1 47.852 56.934 L 47.852 73.242 L 38.574 77.637 L 38.086 77.637 L 38.086 56.934 A 19.895 19.895 0 0 0 37.592 52.377 A 13.908 13.908 0 0 0 34.57 46.338 A 15.027 15.027 0 0 0 30.394 42.9 A 13.313 13.313 0 0 0 23.926 41.309 A 13.23 13.23 0 0 0 13.993 45.547 A 16.964 16.964 0 0 0 13.281 46.338 A 14.587 14.587 0 0 0 10.076 53.303 A 20.325 20.325 0 0 0 9.766 56.934 L 9.766 73.242 L 0.488 77.637 Z M 210.352 77.637 L 209.863 77.637 L 209.863 25.391 A 27.645 27.645 0 0 1 211.036 17.161 A 22.449 22.449 0 0 1 216.455 8.057 A 23.275 23.275 0 0 1 230.982 1.167 A 32.017 32.017 0 0 1 234.521 0.977 A 27.863 27.863 0 0 1 243.351 2.32 A 23.299 23.299 0 0 1 252.588 8.057 A 21.936 21.936 0 0 1 258.818 20.566 A 30.956 30.956 0 0 1 259.18 25.391 L 259.18 73.242 L 249.902 77.637 L 249.414 77.637 L 249.414 25.391 A 19.895 19.895 0 0 0 248.92 20.834 A 13.908 13.908 0 0 0 245.898 14.795 A 14.129 14.129 0 0 0 235.604 9.796 A 18.819 18.819 0 0 0 234.521 9.766 A 15.926 15.926 0 0 0 228.906 10.72 A 14.038 14.038 0 0 0 223.145 14.795 A 14.009 14.009 0 0 0 220.044 21.187 A 20.21 20.21 0 0 0 219.629 25.391 L 219.629 73.242 L 210.352 77.637 Z M 106.738 75.684 L 66.406 75.684 L 66.406 4.395 L 71.582 1.953 L 102.539 1.953 L 102.539 2.441 L 98.584 10.84 L 76.172 10.84 L 76.172 34.375 L 102.539 34.375 L 102.539 34.863 L 98.584 43.262 L 76.172 43.262 L 76.172 66.797 L 110.693 66.797 L 110.693 67.285 L 106.738 75.684 Z M 138.77 77.637 L 138.281 77.637 L 113.379 4.004 L 121.826 0 L 122.314 0 L 142.529 61.328 L 161.621 0 L 162.109 0 L 170.557 4.004 L 147.217 73.633 L 138.77 77.637 Z M 181.055 77.637 L 180.566 77.637 L 180.566 4.395 L 189.844 0 L 190.332 0 L 190.332 73.242 L 181.055 77.637 Z" vectorEffect="non-scaling-stroke"/></g></svg>
              </span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded md:hidden text-zinc-400 hover:bg-zinc-700/5 hover:backdrop-blur-sm" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col font-medium md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 border-zinc-700">
              <li>
                <a href="#aboutSection" className="transition-all duration-300 block py-2 px-6 text-white rounded hover:bg-zinc-700/5 hover:backdrop-blur-sm md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 dark:text-white">About me</a>
              </li>
              <li>
                <a href="#projectSection" className="transition-all duration-300 block py-2 px-6 text-white rounded hover:bg-zinc-700/5 hover:backdrop-blur-sm md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 dark:text-white">Project</a>
              </li>
              <li>
                <a href="#contactSection" className="transition-all duration-300 block py-2 px-6 text-white rounded hover:bg-zinc-700/5 hover:backdrop-blur-sm md:hover:bg-transparent md:border-0 md:hover:text-zinc-700 dark:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
