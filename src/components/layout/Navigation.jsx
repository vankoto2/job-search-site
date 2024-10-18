import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

function Navigation() {
  const [open, setOpen] = useState(false);
  const [logAs, setLogAs] = useState(undefined);

  const openWorkHandler = () => {
    setOpen(false);
  };

  const openCompanyHandler = () => {
    setOpen(true);
    setLogAs("company");
  };
  const openWorkerHandler = () => {
    setOpen(true);
    setLogAs("worker");
  };
console.log(logAs);
  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8  sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center  sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className=" self-center text-base font-semibold leading-6 text-gray-900"
                    >
                      Sign in as {logAs}
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div 
                        // action="#" method="POST"
                         className="space-y-6">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between">
                              <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Password
                              </label>
                              <div className="text-sm">
                                <a
                                  href="#"
                                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                  Forgot password?
                                </a>
                              </div>
                            </div>
                            <div className="mt-2">
                              <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div>
                            <button
                              onClick={() => openWorkHandler()}
                              // type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <header className="bg-white text-[#004AAD] py-4 border-b border-blue-200">
        <nav className="container mx-auto">
          <div className="nav-container">
            <Link to="/" className="hover:underline" id="find-job">
              <img
                src={logo}
                alt="Job Portal Logo"
                className="h-[65px] w-auto"
              />
            </Link>

            <ul className="flex space-x-6">
              {logAs && (
                <li>
                  <Link to="/" className="hover:underline" id="find-job">
                    Начало
                  </Link>
                </li>
              )}

              <li>
                <Link
                  to="/jobs"
                  onClick={() => openWorkerHandler()}
                  className="hover:underline"
                >
                  Намери Работа
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  onClick={() => openCompanyHandler()}
                  className="hover:underline"
                >
                  Създай Обява
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  За Нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Контакти
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Блог
                </Link>
              </li>
              {logAs && (
                <li>
                  <Link to="/categories" className="hover:underline">
                    Категории
                  </Link>
                </li>
              )}
              {logAs == "company" && (
                <li>
                  <Link to="/dashboard" className="hover:underline">
                    Профил
                  </Link>
                </li>
              )}
              {logAs == "worker" && (
                <li>
                  <Link to="/employe" className="hover:underline">
                    Профил
                  </Link>
                </li>
              )}
            </ul>
            {!logAs && (
              <Link
                onClick={() => openWorkerHandler()}
                to="/"
                id="login-btn"
                className="text-[#004AAD] flex items-center"
              >
                Login
              </Link>
            )}

            {logAs && (
              <Link
                onClick={() => setLogAs()}
                to="/"
                id="login-btn"
                className="text-[#004AAD] flex items-center"
              >
                Logout
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
