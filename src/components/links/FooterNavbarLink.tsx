import { Link } from "react-router-dom";
import { FC } from "react";

interface FooterNavbarButtonProps {
  to: string;
  image: string;
  onChoose: (page: string) => void;
}

const FooterNavbarLink: FC<FooterNavbarButtonProps> = ({
  to,
  image,
  onChoose,
}) => {
  return (
    <Link to={to} onClick={() => onChoose(to)}>
      <img className="size-9" src={image} alt="footer-navbar-link"></img>
    </Link>
  );
};

export default FooterNavbarLink;
