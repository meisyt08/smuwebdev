"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pill } from "lucide-react";

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
    <NavigationMenu
      className={`${
        isSpecificPage
          ? ""
          : "border-b bg-white/50 backdrop-blur-sm dark:bg-gray-800/50"
      }  flex flex-row justify-between list-none h-16 sticky top-0 p-4 z-50 min-w-full`}
    >
      <div className="flex items-center space-x-2">
        <NavigationMenuItem>
          <Link href="/landing" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${
                isSpecificPage ? "text-white" : ""
              } flex flex-row gap-2`}
            >
              <Pill className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">TuttiFrutti</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </div>
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
