const BaseHeader = () => {
  return (
    <header className="relative">
      <nav aria-label="Top">
        {/* Secondary navigation */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:items-center">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
                      alt=""
                    />
                  </a>
                </div>
                <div className="hidden h-full lg:flex">
                  {/* Mega menus */}
                  <div className="ml-8">
                    <div className="flex h-full justify-center space-x-8">
                      <div className="flex">
                        <div className="relative flex">
                          {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" */}
                          <button
                            type="button"
                            className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                            aria-expanded="false"
                          >
                            Women
                          </button>
                        </div>
                        {/*
                      'Women' mega menu, show/hide based on flyout menu state.

                      Entering: "transition ease-out duration-200"
                        From: "opacity-0"
                        To: "opacity-100"
                      Leaving: "transition ease-in duration-150"
                        From: "opacity-100"
                        To: "opacity-0"
                    */}
                        <div className="absolute inset-x-0 top-full z-10 text-gray-500 sm:text-sm">
                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                          <div
                            className="absolute inset-0 top-1/2 bg-white shadow"
                            aria-hidden="true"
                          />
                          <div className="relative hidden bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                  <div>
                                    <p
                                      id="desktop-featured-heading-0"
                                      className="font-medium text-gray-900"
                                    >
                                      Featured
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-featured-heading-0"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Sleep
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Swimwear
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Underwear
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p
                                      id="desktop-categories-heading"
                                      className="font-medium text-gray-900"
                                    >
                                      Categories
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-categories-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Basic Tees
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Artwork Tees
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Bottoms
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Underwear
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Accessories
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                  <div>
                                    <p
                                      id="desktop-collection-heading"
                                      className="font-medium text-gray-900"
                                    >
                                      Collection
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-collection-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Everything
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Core
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          New Arrivals
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Sale
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p
                                      id="desktop-brand-heading"
                                      className="font-medium text-gray-900"
                                    >
                                      Brands
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-brand-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Full Nelson
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          My Way
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Re-Arranged
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Counterfeit
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Significant Other
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="relative flex">
                          {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" */}
                          <button
                            type="button"
                            className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                            aria-expanded="false"
                          >
                            Men
                          </button>
                        </div>
                        {/*
                      'Men' mega menu, show/hide based on flyout menu state.

                      Entering: "transition ease-out duration-200"
                        From: "opacity-0"
                        To: "opacity-100"
                      Leaving: "transition ease-in duration-150"
                        From: "opacity-100"
                        To: "opacity-0"
                    */}
                        <div className="absolute inset-x-0 top-full z-10 text-gray-500 sm:text-sm">
                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                          <div
                            className="absolute inset-0 top-1/2 bg-white shadow"
                            aria-hidden="true"
                          />
                          <div className="relative hidden bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                  <div>
                                    <p
                                      id="desktop-featured-heading-1"
                                      className="font-medium text-gray-900"
                                    >
                                      Featured
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-featured-heading-1"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Casual
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Boxers
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Outdoor
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p
                                      id="desktop-categories-heading"
                                      className="font-medium text-gray-900"
                                    >
                                      Categories
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-categories-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Artwork Tees
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Pants
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Accessories
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Boxers
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Basic Tees
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                  <div>
                                    <p
                                      id="desktop-collection-heading"
                                      className="font-medium text-gray-900"
                                    >
                                      Collection
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-collection-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Everything
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Core
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          New Arrivals
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Sale
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p
                                      id="desktop-brand-heading"
                                      className="font-medium text-gray-900"
                                    >
                                      Brands
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby="desktop-brand-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Significant Other
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          My Way
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Counterfeit
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Re-Arranged
                                        </a>
                                      </li>
                                      <li className="flex">
                                        <a
                                          href="#"
                                          className="hover:text-gray-800"
                                        >
                                          Full Nelson
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Company
                      </a>
                      <a
                        href="#"
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Stores
                      </a>
                    </div>
                  </div>
                </div>
                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  {/* Mobile menu toggle, controls the 'mobileMenuOpen' state. */}
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Open menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                  {/* Search */}
                  <a
                    href="#"
                    className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </a>
                </div>
                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>
                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <a
                          href="#"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Search</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="flex">
                        <a
                          href="#"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Account</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <span
                      className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                      aria-hidden="true"
                    />
                    <div className="flow-root">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <svg
                          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BaseHeader;
