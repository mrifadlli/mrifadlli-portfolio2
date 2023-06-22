import {} from "react";
import { Link } from "react-scroll";

// eslint-disable-next-line react/prop-types
const NavLink = ({ link, className, onClick }) => {
  return (
    <li className={className}>
      <Link to={link} smooth duration={400} onClick={onClick}>
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
