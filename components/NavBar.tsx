import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[60px]">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default NavBar;
