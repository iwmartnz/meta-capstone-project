"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  time: z.string({
    required_error: "A time is required.",
  }),
  numberOfGuests: z.coerce
    .number()
    .min(0, { message: "Number of guests must be above 0" })
    .max(10, { message: "Maximum number of guest reached" }),
  occasion: z.string(),
});

type ReservationData = {
  dateOfBooking: string;
  time: string;
  numberOfGuests: number;
  occasion: string;
};

type Props = {
  availableTimes: Array<string>;
  setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>>;
  setReservationData: React.Dispatch<React.SetStateAction<ReservationData>>;
};

export default function BookingForm({
  availableTimes,
  setIsFormFilled,
  setReservationData,
}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberOfGuests: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setReservationData((prevState) => {
      return {
        ...prevState,
        ...values,
      };
    });
    setIsFormFilled(() => true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time of arrival" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {availableTimes.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Your reservation will start from the hour you select above
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of guests</FormLabel>
              <FormControl>
                <Input placeholder="0" type="number" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="occasion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Occasion</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an occasion that best fits your booking" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Birthday">Birthday</SelectItem>
                  <SelectItem value="Anniversary">Aniversary</SelectItem>
                  <SelectItem value="Family Reunion">Family Reunion</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Additional details can be added by contacting our customer
                service
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" bg-lemon-yellow text-lemon-black hover:text-white"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
