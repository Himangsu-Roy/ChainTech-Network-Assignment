import ActiveLink from "./ActiveLink";

// Navbar component
const Navbar = () => {
  // Array of menu items with their names and corresponding href links
  const menuItems = [
    {
      name: "Login",
      href: "/login",
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

  return (
    <div className="mx-auto container pt-4 sticky-top pb-5">
      <div className="row">
        <div className="col text-end">
          {/* Navigation menu */}
          <ul className="nav d-flex justify-content-end gap-4">
            {/* Mapping through menu items */}
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item text-dark">
                {/* ActiveLink component to handle active state of links */}
                <ActiveLink to={item.href} className="nav-link text-dark">
                  {item.name}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
