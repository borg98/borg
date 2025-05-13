import Link from "next/link";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative flex justify-between items-center px-4 py-2">
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isScrolled ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"
          }`}
          style={{ pointerEvents: "none" }}
        />
        <div className="relative">
          <Link href="/">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white">{`[...martinBorg]`}</h2>
            </div>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <Link href="#skills" passHref>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:h-3">
                  <p className="text-white relative font-extrabold z-10 text-sm md:text-base">
                    Skills
                  </p>
                </span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#projects" passHref>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:h-3">
                  <p className="text-white relative font-extrabold z-10 text-sm md:text-base">
                    Projects
                  </p>
                </span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" passHref>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:h-3">
                  <p className="text-white relative font-extrabold z-10 text-sm md:text-base">
                    Contact
                  </p>
                </span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
