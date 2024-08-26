import { Link } from "react-router-dom";
import { FC } from "react";

interface FooterNavbarButtonProps {
  to: string;
  image: string;
}

const FooterNavbarLink: FC<FooterNavbarButtonProps> = ({ to, image }) => {
  return (
    <Link className="" to={to}>
      <img src={image} alt="test" width="38px"></img>
    </Link>
  );
};

export default FooterNavbarLink;
