"use client";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "@/lib/fakeApi";
import BookingForm from "@/components/BookingForm";
import BookingDetails from "@/components/BookingDetails";
import { ChevronLeft } from "lucide-react";
//Headings Font
import { Markazi_Text } from "next/font/google";
import DatePicker from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Booking from "@/components/Booking";
const markazi_text = Markazi_Text({ subsets: ["latin"] });

type Reservation = {
  dateOfBooking: string;
  time: string;
  numberOfGuests: number;
  occasion: string;
};

function initializeTimes() {
  // create a Date object to represent today's date
  const today = new Date();
  return { times: fetchAPI(today) };
}

function updateTimes(availableTimes: any, action: any) {
  switch (action.type) {
    case "newDate":
      return { ...availableTimes };
    default:
      return availableTimes;
  }
}
const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, times);
  const [reservationData, setReservationData] = useState({
    dateOfBooking: "",
    time: "",
    numberOfGuests: 0,
    occasion: "",
  });

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    console.log(reservationData);
  }, [reservationData]);

  function submitForm(data: Reservation) {
    console.log(`Submitting the form data to the server ${data}`);
  }

  return (
    <>
      {isFormFilled ? (
        <BookingDetails
          reservationData={reservationData}
          submitForm={submitForm}
          setIsFormFilled={setIsFormFilled}
        />
      ) : (
        <Booking
          reservationData={reservationData}
          availableTimes={availableTimes}
          setIsFormFilled={setIsFormFilled}
          setReservationData={setReservationData}
        />
      )}
    </>
  );
}
