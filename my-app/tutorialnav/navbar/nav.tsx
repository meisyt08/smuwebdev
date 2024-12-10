"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationBar(){
    return (
        <NavigationMenu className="flex flex-row justify-between min-w-full list-none h-16 position: sticky top-0 p-5">
            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About Us
            </NavigationMenuLink> 
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/start-page" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Game
            </NavigationMenuLink> 
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/resources" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Resources
            </NavigationMenuLink> 
            </Link>
            </NavigationMenuItem>
        </NavigationMenu>
    )
}