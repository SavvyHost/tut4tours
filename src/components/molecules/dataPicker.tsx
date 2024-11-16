import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

interface DatePickerProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onDateChange: (formattedDate: string) => void;
  setFieldValue: (field: string, value: any) => void;
}

const DatePickerModal: React.FC<DatePickerProps> = ({
  open,
  onOpen,
  onClose,
  onDateChange,
  setFieldValue,
}) => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  const handleDateChange = (newValue: dayjs.Dayjs | null) => {
    if (newValue && dayjs.isDayjs(newValue)) {
      const formattedDate = newValue.format("YYYY-MM-DD");
      setSelectedDate(newValue);
      onDateChange(formattedDate);
      setFieldValue("start_at", formattedDate);
    } else {
      onDateChange("");
      setFieldValue("start_at", "");
    }
    onClose(); // Close the date picker after selecting a date
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate} // Bind selected date to date picker
        onChange={handleDateChange}
        open={open} // Control the open state via the passed prop
        onClose={onClose} // Trigger external onClose function when the picker is closed
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            onClick={onOpen} // Open the date picker when the input is clicked
            InputProps={{
              ...params.InputProps,
              className: "w-full cursor-pointer",
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerModal;
