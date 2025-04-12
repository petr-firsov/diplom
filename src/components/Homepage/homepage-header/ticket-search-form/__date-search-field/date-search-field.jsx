import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

export default function DateSearchField() {
    const [value, setValue] = useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            value={value} 
            onChange={(newValue) => setValue(newValue)} 
            />
        </LocalizationProvider>
    )
}