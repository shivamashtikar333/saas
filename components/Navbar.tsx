import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
// import { type Metadata } from "next";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="navbar max-sm:px-0 ">
      <Link href={"/"}>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src={"/images/logo.svg"} alt="logo" height={44} width={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
