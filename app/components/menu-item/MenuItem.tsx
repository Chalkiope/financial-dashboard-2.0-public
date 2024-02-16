import s from "./MenuItem.module.scss";
import { ReactElement } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

export const MenuItem = ({
  menuItemId,
  text,
}: {
  menuItemId: string;
  text: string;
}) => {
  return (
    <div className={s.menuItem} id={`${menuItemId}-menu-item`}>
      <Link
        href={""}
        // to={menuItemId}
        // spy={true}
        // smooth={true}
        // duration={700}
        className={s.link}
        // activeClass="active"
      >
        <i className={s.icon}></i>
        <span>{text}</span>
      </Link>
    </div>
  );
};
