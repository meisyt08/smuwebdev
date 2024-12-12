"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "@/components/mode-toggle";

export function NavigationBar() {
  const pathname = usePathname();
  const isSpecificPage = pathname === "/quiz" || pathname === "/start-page";

  return (
    <NavigationMenu className="flex flex-row justify-between list-none h-16 sticky top-0 p-4 z-50 min-w-full">
      <div className="flex flex-row">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                isSpecificPage ? "text-white" : ""
              }`}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/start-page" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                isSpecificPage ? "text-white" : ""
              }`}
            >
              Game
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/resources" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                isSpecificPage ? "text-white" : ""
              }`}
            >
              Resources
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </div>

      <div>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </div>
    </NavigationMenu>
  );
}
