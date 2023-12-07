import { Markazi_Text } from "next/font/google";

const markazi_text = Markazi_Text({ subsets: ["latin"] });

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-screen flex-col pt-20 md:h-screen md:max-w-4xl md:flex-row md:pb-4 md:pt-24 lg:px-0">
      <div className=" md:bg-reservation bg-lemon-green relative flex h-40 items-end justify-start overflow-hidden bg-cover md:h-full md:w-3/6 md:items-start md:rounded-xl md:pt-20">
        <div className=" bg-lemon-green rounded-r-xl px-4 py-4">
          <h1
            className={`relative  text-5xl font-semibold text-neutral-50 ${markazi_text.className}`}
          >
            Reservation form
          </h1>
          <h2 className=" text-lemon-grey text-md max-w-xs">
            To reserve a table please complete and submit the booking form
          </h2>
        </div>
      </div>
      <section className="h-full overflow-hidden px-8 py-8 md:max-h-full md:w-3/6">
        {children}
      </section>
    </main>
  );
}
