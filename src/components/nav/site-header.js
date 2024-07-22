"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/nav/icons";
import MainNav from "./main-nav";
import { ThemeToggle } from "./toggle-theme";
import { NavAlert } from "./nav-alert";
import { useSelector } from "react-redux";
import { AvatarDemo } from "../avatar";
import { useEffect, useState } from "react";
import MobileNav from "./sideNav";

export function SiteHeader() {
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])
  // console.log(user);
  if (isLoading)
    return (
      <header className="backdrop-blur-sm bg-backgroundOpac top-0 z-40 w-full border-b">
        <div className="container flex h-16 items-center justify-between sm:justify-between sm:space-x-0">
          <div className="hidden md:flex">
            <MainNav items={siteConfig.mainNav} isVisible={true} />
          </div>
          <div className="md:hidden">
            <MainNav items={siteConfig.mainNav} isVisible={false} />
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              {/* <div className="md:flex hidden">
              <NavAlert />
            </div> */}
              <ThemeToggle />
              {user?.authenticated && <AvatarDemo imgURI={user.avatar} />}
              <div className="md:hidden">
                <MobileNav />
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
}
