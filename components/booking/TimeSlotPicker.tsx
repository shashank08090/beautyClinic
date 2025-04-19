"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Mock time slots - in a real app, this would be generated based on availability
const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "9:30 AM", available: false },
  { time: "10:00 AM", available: true },
  { time: "10:30 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "11:30 AM", available: false },
  { time: "1:00 PM", available: true },
  { time: "1:30 PM", available: true },
  { time: "2:00 PM", available: false },
  { time: "2:30 PM", available: true },
  { time: "3:00 PM", available: true },
  { time: "3:30 PM", available: true },
  { time: "4:00 PM", available: false },
  { time: "4:30 PM", available: true },
  { time: "5:00 PM", available: true },
];

interface TimeSlotPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TimeSlotPicker({ value, onChange }: TimeSlotPickerProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {timeSlots.map((slot) => (
        <Button
          key={slot.time}
          type="button"
          variant="outline"
          size="sm"
          onClick={() => onChange(slot.time)}
          disabled={!slot.available}
          className={cn(
            "h-10 w-full",
            value === slot.time && "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {slot.time}
        </Button>
      ))}
    </div>
  );
}