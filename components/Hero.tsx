import { heroData } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Markazi_Text } from "next/font/google";

const markazi_text = Markazi_Text({ subsets: ["latin"] });

export default function Hero() {
  const { heading, subHeading, description, imgSrc } = heroData;
  return (
    <section className="bg-[#495E57]">
      <div className="relative mx-auto flex h-96 flex-col  justify-center px-6 md:max-w-4xl md:flex-row md:items-center md:justify-between lg:px-0">
        <div className=" md:w-3/6">
          <h1 className={` text-5xl text-[#F4CE14] ${markazi_text.className}`}>
            {heading}
          </h1>
          <h2 className="pb-4 pt-2 text-3xl text-white">{subHeading}</h2>
          <p className=" pb-12 text-xl text-white">{description}</p>
          <Button
            asChild
            className="bg-[#F4CE14] text-neutral-800 hover:bg-[#F4CE14]/80"
          >
            <Link href="/booking">Reserve a table</Link>
          </Button>
        </div>
        <div className="relative hidden md:flex md:h-full md:w-3/6 md:items-center md:justify-end">
          <div className="absolute top-8 h-96 w-80 overflow-hidden rounded-xl object-contain object-center">
            <Image src={imgSrc} height={400} width={400} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
