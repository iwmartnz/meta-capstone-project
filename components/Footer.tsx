import { footerData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { logo, routes, socialLinks, contactInfo } = footerData;
  const { phone, email, address, addressSecondary } = contactInfo;
  return (
    <footer className="bg-lemon-black text-lemon-grey flex flex-col px-6 pt-10 md:h-96  md:flex-row ">
      <div className="mx-auto flex w-full flex-col items-start justify-between md:max-w-4xl md:flex-row lg:max-w-4xl">
        <div className="flex h-auto w-32 items-center">
          <Image src={logo} height={200} width={200} alt="logo" />
        </div>
        <div className="pt-6">
          <h1 className="text-xl font-medium md:pb-6">Navigation</h1>
          <ul className="flex flex-col">
            {routes.map((route) => (
              <Link
                href={route.path}
                key={route.id}
                className=" hover:underline"
              >
                {route.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="pt-6">
          <h1 className=" text-xl font-medium md:pb-6">Contact</h1>
          <h2 className="pt-2 font-bold">Phone:</h2>
          <p>{phone}</p>
          <h2 className="pt-2 font-bold">Email:</h2>
          <p>{email}</p>
          <h2 className="pt-2 font-bold">Address:</h2>
          <p>{address}</p>
          <p>{addressSecondary}</p>
        </div>
        <div className="pt-6">
          <h1 className="text-xl font-medium md:pb-6">Social Media</h1>
          <ul className="flex flex-col">
            {socialLinks.map((link) => (
              <Link href={link.url} key={link.id} className=" hover:underline">
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
