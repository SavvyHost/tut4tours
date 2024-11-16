import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useFormikContext } from "formik";
import { TextField } from "@mui/material";

function DateInputComp({ name, countDays }) {
  const today = dayjs();
  const daysAfter = countDays;
  const futureDate = today.add(daysAfter, "day");
  const { values, setFieldValue } = useFormikContext();
  const [open, setOpen] = React.useState(false);

  const handleInputClick = () => {
    setOpen(true);
  };

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      setFieldValue(name, formattedDate);
      setOpen(false); 
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // defaultValue={today}
        minDate={today}
        maxDate={futureDate}
        disablePast
        name={name}
        views={["year", "month", "day"]}
        onChange={handleDateChange}
        open={open}
        onClose={() => setOpen(false)}
        
        onOpen={() => setOpen(true)}
        slots={{
          textField: (params) => (
            <TextField
              {...params}
              onClick={handleInputClick}
              onFocus={handleInputClick}
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
}

export default DateInputComp;
