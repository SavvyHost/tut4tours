import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { CalendarIcon } from "lucide-react";

const CustomDatePicker = ({ value, onChange, label }) => {
  const [open, setOpen] = useState(false);

  const handleInputClick = () => {
    setOpen(true);
  };

  return (
    <div className="relative">
      <TextField
        label={label}
        value={value ? value.format("MM/DD/YYYY") : ""}
        onClick={handleInputClick}
        InputProps={{
          endAdornment: (
            <CalendarIcon className="text-gray-400 cursor-pointer" size={20} />
          ),
          readOnly: true,
        }}
        fullWidth
      />
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        open={open}
        onClose={() => setOpen(false)}
        renderInput={() => null}
      />
    </div>
  );
};

export default CustomDatePicker;
