import { useState } from "react";
import Link from "next/link";

function MainNavigation() {
  const [navActive, setNavActive] = useState(null);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className='logo'>HANGOUT HAVEN</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <Link href='/meetuplist'>
            <a className={`nav__link`}>List of Meetups</a>
          </Link>
          <Link href='/new-meetup'>
            <a className={`nav__link`}>Create Meetup</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
