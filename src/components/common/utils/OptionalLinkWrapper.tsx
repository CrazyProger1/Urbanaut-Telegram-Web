import React from "react";
import { Link } from "@/i18n/routing";

interface Props {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
}
const OptionalLinkWrapper = ({ href, children, className, onClick }: Props) => {
  if (href) {
    return (
      <Link className={className} onClick={onClick} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default OptionalLinkWrapper;
