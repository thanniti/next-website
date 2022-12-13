import { useState } from "react";
import Link from "next/link";
import Background from "./background";
import Tooltip from "../Tooltip";
import Logo from "../Logo";
import styles from "./index.module.scss";

const title= "Portfolio";

// header component to show at top of every page
const Header = () => {
  // It used to be the case that the header was larger
  // for the home page. If we decide to stick with a
  // universally small one, this option should probably
  // just be removed.
  const big = false;

  return (
    <header className={styles.header} data-big={big}>
      <Background />
      <Title big={big} />      
      <Nav />
    </header>
  );
};

export default Header;

// centered site title with logo and text
const Title = ({ big }) => (
  <Link href="/" className={styles.title}>
      <Text />
  </Link>
);

// site title text
const Text = () => (
  <span className={styles.text}>
    {title.split("").map((char, index) => (
      <span key={index}>{char}</span>
    ))}
  </span>
);

// navigation bar with links
const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav} data-open={open}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        <span>{open ? "Close" : "Menu"}</span>
      </button>
      <NavLink link="/blog" text="Blog" tooltip="blog and reflective" />
      <NavLink link="/extras" text="diplomas" tooltip="all my diplomas" />

      <div className={styles.break} />
    </nav>
  );
};

// nav bar link
const NavLink = ({ link, text, icon, tooltip }) => (
  <Link href={link} passHref className={styles.link}>
    <Tooltip content={tooltip}>
      <a>
        {text}
        {icon && <i className={icon} />}
      </a>
    </Tooltip>
  </Link>
);
