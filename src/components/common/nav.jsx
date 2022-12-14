import { Fragment, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, MoonIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../context/theme-context";
import { matchRoutes, useLocation } from "react-router-dom";

export default function NavigationBar() {
  const location = useLocation();

  const { theme, setTheme } = useTheme();

  function handleTheme() {
    const html = document.querySelector("html");
    theme === "light"
      ? html.classList.add("dark")
      : html.classList.remove("dark");
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const html = document.querySelector("html");
  html.classList.add("dark");
  }, [])

  return (
    <Disclosure
      as="nav"
      className={`dark:bg-transparent dark:text-white bg-white shadow mt-5  rounded `}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <svg
                    className="w-28"
                    viewBox="394.847 178.688 2478.014 2478.014"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M972.503 1377.719H763.261l-7.474 5.979v186.075h57.542v-70.246l5.23-5.23h153.942c38.858 0 56.794-10.461 56.794-37.363v-42.596c.002-26.157-17.934-36.619-56.792-36.619m0 68.75c0 12.703-8.221 14.945-26.903 14.945H819.308l-5.979-5.23v-39.606l5.23-5.231h127.039c17.936 0 26.902 2.242 26.902 14.945l.003 20.177zm162.909-33.628 50.068 73.234-2.989 6.726h-110.599l-28.397 35.123h164.403l11.957 6.725 25.408 35.123h66.509l-145.721-194.295m629.217 156.93v-52.309l5.979-5.232h111.347v-32.881h-176.362v127.787h260.058v-32.881h-194.296m-65.762-159.172h262.299v35.87h-262.299zm-292.189 34.375h211.482c-2.989-26.902-20.177-34.375-62.025-34.375h-151.699c-47.826 0-62.772 8.968-62.772 45.584v101.631c0 35.871 14.946 45.586 62.772 45.586H1593.5c42.596 0 59.036-8.221 60.531-35.871h-209.988l-5.979-5.979v-112.092m-824.261 35.87H460.609l-4.484-5.23v-32.881l4.484-3.736h206.999l2.989-6.726c-6.726-17.936-25.408-26.902-59.036-26.902H467.334c-47.826 0-62.772 8.967-62.772 45.583v21.672c0 35.871 14.946 45.586 62.772 45.586h153.195l4.483 4.482v34.375l-3.736 5.232H400.078s-5.23 2.988-5.23 3.736c3.736 25.408 20.924 32.133 62.024 32.133h156.932c47.826 0 63.52-8.967 63.52-45.584v-26.156c-.001-35.869-15.694-45.584-63.521-45.584m1549.879-75.476h-86.686l-4.483 8.967 95.652 70.246c17.936-10.463 38.112-20.924 59.036-31.387m14.199 83.697 84.444 61.277h86.686l3.736-8.221-125.545-91.916c-16.44 12.703-33.627 25.408-49.321 38.86"
                      fill="#005288"
                    />
                    <path
                      d="M2150.978 1569.772h-78.465l-6.727-10.463c53.059-51.562 290.696-271.265 807.074-294.431.001 0-432.681 14.945-721.882 304.894"
                      fill="#a7a9ac"
                    />
                  </svg>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className={`${
                      location.pathname === "/" &&
                      "border-indigo-500 text-indigo-600 border-b-2 dark:text-indigo-400"
                    } active:border-indigo-500 activEtext-indigo-600 dark:text-gray-400 inline-flex uppercase items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
                  >
                    Launches
                  </a>
                  <a
                    href="/history"
                    className={`${
                      location.pathname === "/history" &&
                      "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    } "active:border-indigo-500 active:text-indigo-600 dark:text-gray-400 inline-flex uppercase items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
                  >
                    History
                  </a>
                  <a
                    href="/about"
                    className={`${
                      location.pathname === "/about" &&
                      "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    } "active:border-indigo-500 active:text-indigo-600 dark:text-gray-400 inline-flex uppercase items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
                  >
                    About
                  </a>
                </div>
              </div>
              <button>
                <MoonIcon
                  onClick={handleTheme}
                  className="w-5 h-5 text-center my-auto text-slate-400 "
                />
              </button>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={` block border-l-4 ${
                  location.pathname === "/" &&
                  "border-indigo-500 bg-indigo-50 text-indigo-700 dark:text-indigo-400"
                } py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 `}
              >
                Launches
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/history"
                className={` block border-l-4 ${
                  location.pathname === "/history" &&
                  "border-indigo-500 bg-indigo-50 text-indigo-700 dark:text-indigo-400"
                } py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 `}
              >
                History
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className={` block border-l-4 ${
                  location.pathname === "/about" &&
                  "border-indigo-500 bg-indigo-50 text-indigo-700 dark:text-indigo-400"
                } py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 `}
              >
                About
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
