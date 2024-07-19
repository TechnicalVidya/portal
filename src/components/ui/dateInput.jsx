import * as React from "react";
import { cn } from "@/lib/utils";

const DateInput = React.forwardRef(
  ({ className, value, onChange, ...props }, ref) => {
    const handleChange = (event) => {
      const selectedDate = event.target.value
      onChange(selectedDate);
    };

    return (
      <input
        type="date"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        value={value}
        onChange={handleChange}
        {...props}
        required
      />
    );
  }
);

DateInput.displayName = "DateInput";

export { DateInput };