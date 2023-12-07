import Image from "next/image";

type Props = {
  testimonial: {
    id: number;
    name: string;
    rating: number;
    reviewText: string;
    image: string;
  };
};

export default function Testimonial({ testimonial }: Props) {
  const { id, name, rating, reviewText, image } = testimonial;
  return (
    <div className="px-6 md:px-12 lg:px-40">
      <h1 className="text-center text-4xl font-semibold">Testimonial</h1>
      <figure className="pt-16">
        <p className="py-6 text-center text-xl">{reviewText}</p>
        <div className="flex items-center justify-center gap-2">
          <div className="h-20 w-20 overflow-hidden rounded-full">
            <Image src={image} width={100} height={100} alt={name} />
          </div>
          <h2>{name}</h2>
        </div>
      </figure>
    </div>
  );
}
