import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ChevronDown } from "lucide-react";

interface DropdownMenuProps {
  label: string;
  options: string[];
  openDropdown: boolean;
  selectedOption: string;
  onClick: () => void;
  onSelectChange: (event: SelectChangeEvent<string>) => void;
}

// Create a custom theme with blue border
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2196f3", // light blue
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2", // darker blue
          },
        },
        notchedOutline: {
          borderColor: "#90caf9", // very light blue
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#1976d2", // darker blue
          },
        },
      },
    },
  },
});

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  options,
  openDropdown,
  selectedOption,
  onClick,
  onSelectChange,
}) => (
  <ThemeProvider theme={theme}>
    <div className="relative w-full sm:w-[100px] lg:w-[200px]">
      <FormControl
        variant="outlined"
        size="small"
        onClick={onClick} // Toggle dropdown on click
        sx={{
          minWidth: 180,
          marginRight: 2,
          "& .MuiSelect-select": {
            paddingRight: "32px", // Ensure text doesn't overlap with the icon
          },
        }}
      >
        <InputLabel id={`${label}-dropdown-label`} className="text-base">
          {label}
        </InputLabel>
        <Select
          labelId={`${label}-dropdown-label`}
          value={selectedOption}
          onChange={onSelectChange}
          label={label}
          open={openDropdown}
          IconComponent={ChevronDown}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300, // Limit dropdown height
                width: 250, // Adjust width if necessary
              },
            },
            disableScrollLock: true,
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  </ThemeProvider>
);

export default DropdownMenu;
