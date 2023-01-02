//libraries
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
//styles
import "react-datepicker/dist/react-datepicker.css";
//css
import "../index.css";

/**
 * The function takes a date as a parameter, formats it, and then sets the state of the date picker to
 * the formatted date.
 * @param props - {onChange: ƒ, value: "", name: "dateOfBirth", label: "Date of Birth", required: true,
 * …}
 */
const DatePickerOfBirth = (props) => {
  const [pickedDateBirth, setPickedDateBirth] = useState();

  const handleDateChange = (selectedDate) => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();
    const formatedDate = `${month}/${day}/${year}`;

    props.onChange(formatedDate);
    setPickedDateBirth(selectedDate);
  };

  /* Returning the date of birth picker component. */
  return (
    <DatePicker
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required
      minDate={moment().subtract(150, "years")._d}
      maxDate={moment().subtract(18, "years")._d}
      selected={pickedDateBirth}
      onChange={(selectedDate) => handleDateChange(selectedDate)}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

export default DatePickerOfBirth;
