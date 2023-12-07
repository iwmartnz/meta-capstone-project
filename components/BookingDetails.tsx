import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  reservationData: {
    dateOfBooking: any;
    time: string;
    numberOfGuests: number;
    occasion: string;
  };
  submitForm: Function;
  setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BookingDetails({
  reservationData,
  submitForm,
  setIsFormFilled,
}: Props) {
  const { dateOfBooking, time, numberOfGuests, occasion } = reservationData;

  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

  function confirmBooking() {
    setIsBookingSubmitted((prevState) => true);
    submitForm(reservationData);
  }
  function editBooking() {
    setIsFormFilled((prevState) => false);
  }

  return (
    <section className="h-full">
      {isBookingSubmitted ? (
        <BookingConfirmation />
      ) : (
        <>
          <h1 className="text-xl font-semibold">Booking details</h1>
          <div className="pt-4">
            <h3 className="text-sm font-semibold text-neutral-500">Date:</h3>
            <p>{dateOfBooking}</p>
          </div>
          <div className="pt-2">
            <h3 className="text-sm font-semibold text-neutral-500">Time:</h3>
            <p>{`${time} PM`}</p>
          </div>
          <div className="pt-2">
            <h3 className="text-sm font-semibold text-neutral-500">Guests:</h3>
            <p>{numberOfGuests}</p>
          </div>
          <div className="pb-6 pt-2">
            <h3 className="text-sm font-semibold text-neutral-500">
              Occasion:
            </h3>
            <p>{occasion}</p>
          </div>
          <div className="flex w-full gap-4">
            <Button
              onClick={confirmBooking}
              className=" bg-lemon-yellow text-lemon-black hover:text-lemon-grey"
            >
              Book
            </Button>
            <Button
              onClick={editBooking}
              className=" bg-lemon-grey"
              variant="outline"
            >
              Edit
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

function BookingConfirmation() {
  return (
    <>
      <h1 className="pt-20 text-center text-3xl font-bold">Thank you!</h1>
      <p className="text-center text-xl">Your table has been booked.</p>
      <div className="flex w-full justify-center pt-20">
        <Button asChild className=" bg-lemon-green text-white">
          <Link href="/">Home</Link>
        </Button>
      </div>
    </>
  );
}
