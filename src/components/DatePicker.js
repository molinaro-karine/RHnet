//libraries
import React, { useState } from "react";
import DatePicker from "react-datepicker";
//components

//styles
import "react-datepicker/dist/react-datepicker.css";
import "../index.css";
//css

const DatePickerComponent = (props) => {
  const [pickedDate, setPickedDate] = useState();

  const handleDateChange = (selectedDate) => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();
    const formatedDate = `${month}/${day}/${year}`;

    props.onChange(formatedDate);
    setPickedDate(selectedDate);
  };

  return (
    <DatePicker
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required
      selected={pickedDate}
      onChange={(selectedDate) => handleDateChange(selectedDate)}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

export default DatePickerComponent;
