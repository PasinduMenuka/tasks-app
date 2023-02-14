import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "Today's tasks",
    path: "/today",
  },
  {
    name: "All tasks",
    path: "/",
  },
  // {
  //   name: "Important tasks",
  //   path: "/important",
  // },
  // {
  //   name: "Completed tasks",
  //   path: "/completed",
  // },
  // {
  //   name: "Uncompleted tasks",
  //   path: "/uncompleted",
  // },
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive  }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (  //function links loops
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={`px-4 py-2 w-full block transition hover:bg-[#184ECA] hover:text-white dark:hover:bg-[#4cd964] ${
                currentPath === link.path ? classActive : ""
              }`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
