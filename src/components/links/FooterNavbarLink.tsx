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
    <Link className="" to={to} onClick={() => onChoose(to)}>
      <img src={image} alt="test" width="38px"></img>
    </Link>
  );
};

export default FooterNavbarLink;
