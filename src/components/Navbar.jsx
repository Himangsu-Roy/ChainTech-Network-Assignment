import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

  const signOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const menuItems = [
    {
      name: "Login",
      href: "/",
    },
    {
      name: "Registration",
      href: "/registration",
    },
    {
      name: "Account",
      href: "/account",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

//   useTitle("Home");

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* <Link to="/">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img className="w-[60px]" src={logo} alt="" />
            </span>
            <span className="font-bold">ToyLandia</span>
          </div>
        </Link> */}
        <div className="hidden lg:block ml-auto">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <ActiveLink
                  to={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900 uppercase"
                >
                  {item.name}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>

        {user ? (
          <>
            <img
              className="w-[40px] ml-auto rounded-full hidden lg:block"
              src={user.photoURL}
              alt=""
              title={user.displayName}
            />

            <div className="hidden lg:block ml-4">
              <Link to="" onClick={signOut}>
                <button
                  type="button"
                  className="rounded-md bg-[#EE552A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#EE552A]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Sign Out
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="hidden lg:block ml-auto">
            <Link to="/register">
              <button
                type="button"
                className="rounded-md bg-[#EE552A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#EE552A]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}

        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <Link to="/">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <img className="w-[60px]" src={logo} alt="" />
                      </span>
                      <span className="font-bold">ToyLandia</span>
                    </div>
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900 uppercase">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                {user ? (
                  <div className="">
                    <img
                      className="w-[40px] my-4 rounded-full "
                      src={user.photoURL}
                      alt=""
                      title={user.displayName}
                    />
                    <div className="mt-2 space-y-2">
                      <Link to="" onClick={signOut}>
                        <button
                          type="button"
                          className="rounded-md bg-[#EE552A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#EE552A]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          Sign Out
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 space-y-2">
                    <Link to="/login">
                      <button
                        type="button"
                        className="rounded-md bg-[#EE552A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#EE552A]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
