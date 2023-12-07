import { testimonialsData } from "@/lib/data";
import { Star } from "lucide-react";
import Image from "next/image";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  let testimonial = testimonialsData[0];
  const { id, name, rating, reviewText, image } = testimonial;

  return (
    <section className="bg-lemon-grey flex flex-col justify-center px-6 py-28 md:px-12 lg:px-52">
      <h1 className="text-center text-4xl font-semibold">Testimonial</h1>
      <figure className="pt-16">
        <div className="flex justify-center gap-1">
          <Image src="/icons/star.svg" alt="" height={16} width={16} />
          <Image src="/icons/star.svg" alt="" height={16} width={16} />
          <Image src="/icons/star.svg" alt="" height={16} width={16} />
          <Image src="/icons/star.svg" alt="" height={16} width={16} />
          <Image src="/icons/star.svg" alt="" height={16} width={16} />
        </div>
        <p className="py-6 text-center text-xl">{reviewText}</p>
        <div className="flex items-center justify-center gap-2">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image src={image} width={100} height={100} alt={name} />
          </div>
          <h2 className="text-xl font-medium">{name}</h2>
        </div>
      </figure>
    </section>
  );
}
