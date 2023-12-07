import { Markazi_Text } from "next/font/google";
import Image from "next/image";

const markazi_text = Markazi_Text({ subsets: ["latin"] });

type Props = {
  aboutData: {
    heading: string;
    subHeading: string;
    description: string;
    imagePrimary: string;
    imageSecondary: string;
  };
};

export default function About({ aboutData }: Props) {
  const { heading, subHeading, description, imagePrimary, imageSecondary } =
    aboutData;
  return (
    <section className="mx-auto flex min-h-screen flex-col px-6 py-28 md:max-w-4xl md:flex-row md:items-center md:justify-center md:gap-8 lg:max-w-4xl lg:px-0">
      <div className=" md:w-3/6">
        <h1 className={` text-lemon-green text-5xl ${markazi_text.className}`}>
          {heading}
        </h1>
        <h2 className="pb-4 pt-2 text-3xl">{subHeading}</h2>
        <p>{description}</p>
      </div>
      <div className="relative mt-28 h-fit w-full md:mt-0 md:h-full md:w-3/6">
        <figure className="relative h-[22rem] w-[17rem] overflow-hidden rounded-3xl">
          <Image
            src={imageSecondary}
            alt=""
            fill
            className="object-cover object-center"
          />
        </figure>
        <figure className="absolute -top-20 right-0 h-[22rem] w-[17rem] overflow-hidden rounded-3xl">
          <Image
            src={imagePrimary}
            alt=""
            fill
            className="object-cover object-center"
          />
        </figure>
        {/*
        
*/}
      </div>
    </section>
  );
}
