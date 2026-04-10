"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import FreshCart from "@/images/FreshCart.png";
import { GoHeart } from "react-icons/go";
import { FaCartArrowDown, FaRegIdCard, FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";

export default function Navbar() {
  const session = useSession();
  

  const { numberOfCartItems } = useContext(cartContext)

  console.log(session);

  function handleLogout() {
    signOut({
      redirect: true,
      callbackUrl: "/login",
    })
  }

  return (
    <NavigationMenu className="bg-gray-100 max-w-none py-3 justify-start sticky top-0 z-50">
      <div className="flex justify-around items-center gap-4 px-10">
        <Image src={FreshCart} alt="Logo" width={165.16} height={32.5} />

        <div className="w-200 relative">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="border-2 rounded-2xl p-2 w-full px-5"
          />

          <Button className="w-10 h-10 absolute right-2 bottom-0.5 cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded-full">
            <FaSearch className="text-white" />
          </Button>
        </div>
      </div>

      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/shop">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/brands">Brands</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/wishlist">
              {" "}
              <GoHeart className="text-gray-500" />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/cart" className="relative">
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-2 -right-2">
                {numberOfCartItems}
              </span>
              <FaCartArrowDown className="text-gray-500" />
              
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {session.data ? (
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Button className="bg-black ms-2 hover:bg-black cursor-pointer" onClick={handleLogout}>logout</Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ) : (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/login">login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/signup">signup</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>{" "}
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
