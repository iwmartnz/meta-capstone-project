"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";
import DatePicker from "./DatePicker";

type ReservationData = {
  dateOfBooking: string;
  time: string;
  numberOfGuests: number;
  occasion: string;
};

type Props = {
  reservationData: {
    dateOfBooking: string;
    time: string;
    numberOfGuests: number;
    occasion: string;
  };
  availableTimes: Array<string>;
  setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>>;
  setReservationData: React.Dispatch<React.SetStateAction<ReservationData>>;
};

export default function Booking({
  reservationData,
  availableTimes,
  setIsFormFilled,
  setReservationData,
}: Props) {
  const [isDatePicked, setIsDatePicked] = useState(false);

  function resetDate() {
    setReservationData((prevData) => {
      return {
        ...prevData,
        dateOfBooking: "",
      };
    });
  }

  return (
    <section className="">
      {reservationData.dateOfBooking ? (
        <>
          <div>
            <button
              onClick={resetDate}
              className="flex items-center gap-1 pb-2"
            >
              <ChevronLeft />
              <h2>Change date</h2>
            </button>
          </div>
          <h1 className=" text-lemon-green pt-2">Booking Date</h1>
          <h1 className="pb-2 text-xl font-semibold">
            {reservationData.dateOfBooking}
          </h1>
          <BookingForm
            availableTimes={availableTimes}
            setIsFormFilled={setIsFormFilled}
            setReservationData={setReservationData}
          />
        </>
      ) : (
        <DatePicker
          setReservationData={setReservationData}
          reservationData={reservationData}
          setIsDatePicked={setIsDatePicked}
        />
      )}
    </section>
  );
}
