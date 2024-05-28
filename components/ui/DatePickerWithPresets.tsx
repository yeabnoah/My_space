"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDate from "@/context/date";

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>();
  const { dateGet, setDateGet } = useDate();

  React.useEffect(() => {
    if (date) {
      console.log("Selected date:", format(date, "PPP"));
      setDateGet(format(date, "PPP"));
    }
  }, [date, setDateGet]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[200px] justify-start text-left font-normal text-white text-sm",
            !date && "text-white courier-prime-regular text-sm w-[100%]"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-white text-sm" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-white text-sm">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 bg-Sidebar text-white text-sm courier-prime-regular">
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue
              placeholder="Select"
              className="text-white text-sm courier-prime-regular"
            />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="text-white bg-Sidebar border-none text-sm courier-prime-regular"
          >
            <SelectItem value="0" className="text-white text-sm">
              Today
            </SelectItem>
            <SelectItem value="1" className="text-white text-sm">
              Tomorrow
            </SelectItem>
            <SelectItem value="3" className="text-white text-sm">
              In 3 days
            </SelectItem>
            <SelectItem value="7" className="text-white text-sm">
              In a week
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="text-white text-sm courier-prime-regular"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
