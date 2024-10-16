import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

export const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md px-2 py-1 leading-none no-underline outline-none transition-colors hover:bg-blueInka/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none hover:text-redCaja">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
