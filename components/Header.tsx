import { headerData } from "@/lib/data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const { routes, logo, menuIcon } = headerData;

function NavLinks() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default function Header() {
  return (
    <header className="fixed z-50 flex h-20 w-full items-center justify-center border-b-[1px] border-neutral-300 bg-white/70 backdrop-blur-md">
      <div className="fixed z-50 mx-auto flex w-full items-center justify-between px-6 md:max-w-4xl lg:px-0">
        <img src={logo} alt="" className="h-12 w-auto" />
        <nav>
          <ul className="hidden flex-row gap-6 lg:flex">
            {routes.map((route) => (
              <li key={route.id}>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden">
              <img src={menuIcon} alt="" className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription asChild>
                <NavLinks />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
