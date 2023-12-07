"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
  setReservationData: React.Dispatch<React.SetStateAction<ReservationData>>;
  setIsDatePicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormSchema = z.object({
  dateOfBooking: z.date({
    required_error: "A date of booking is required.",
  }),
});

export default function DatePicker({
  reservationData,
  setReservationData,
  setIsDatePicked,
}: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    //JSON.stringify(data.dateOfBooking, null, 2);
    let dateToString = data.dateOfBooking.toDateString();

    setReservationData((prevData) => {
      return {
        ...prevData,
        dateOfBooking: dateToString,
      };
    });

    setIsDatePicked((prevState) => true);

    console.log(dateToString);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dateOfBooking"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of booking</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                The date of booking is used to show the available times and
                tables.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" bg-lemon-yellow text-lemon-black hover:text-white"
        >
          Submit <ChevronRight size={16} />
        </Button>
      </form>
    </Form>
  );
}
