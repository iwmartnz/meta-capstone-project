import { specialsData } from "@/lib/data";

import DishCard from "@/components/DishCard";
import Link from "next/link";
import { Markazi_Text } from "next/font/google";
import { Button } from "./ui/button";

const markazi_text = Markazi_Text({ subsets: ["latin"] });

export default function Specials() {
  const { specialsList, heading } = specialsData;
  return (
    <section className="mx-auto h-screen w-full px-6 pt-8 md:max-w-4xl lg:px-0">
      <div className="flex h-32 items-center justify-between">
        <h1 className={`text-4xl md:text-5xl ${markazi_text.className}`}>
          {heading}
        </h1>
        <Button
          asChild
          className="bg-[#F4CE14] text-neutral-800 hover:text-white"
        >
          <Link href="/menu">Online Menu</Link>
        </Button>
      </div>
      <div>
        <ul className="flex flex-row gap-8 overflow-x-scroll pl-16 md:p-0">
          {specialsList.map((dish) => (
            <li key={dish.id}>
              <DishCard dish={dish} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
