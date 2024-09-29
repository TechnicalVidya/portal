"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/logoTv.svg"

function MainNav({ items, isVisible, isOpen, setIsOpen }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const pathname = usePathname();

  const handleSlider = () => {
    if (isOpen !== undefined && setIsOpen !== undefined) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    let foundIndex = items.findIndex((item) => item.href === pathname);

    if (foundIndex === -1) {
      foundIndex = items.findIndex(
        (item) => item.href && pathname.startsWith(item.href)
      );
    }

    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }

    if (pathname === "/") setActiveIndex(-1);
  }, [pathname, items]);

  return (
    <div className="flex md:flex-row flex-col gap-6 md:gap-10">
      <Link
        href="/"
        className="flex items-center space-x-2"
        onClick={handleSlider}
        passHref>
        <Image src={Logo} className="h-9 w-9" alt="logo" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items && items.length && isVisible ? (
        <nav className="flex md:flex-row flex-col gap-6">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  onClick={handleSlider}
                  className={cn(
                    "flex items-center text-sm font-medium",
                    activeIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                // onClick={() => handleLinkClick(index)}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}

export default MainNav;
