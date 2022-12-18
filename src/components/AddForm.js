//libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/employeeSlice";

//components
import DatePickerComponent from "./DatePicker";

import { departments, states } from "../data/dataStates";

const AddForm = () => {
  // change structure of state options object to make it work with dropdown
  const statesToUse = states.map((state) => {
    return {
      value: state.abbreviation,
      label: state.name,
    };
  });

  const [resetFormKey, setResetFormKey] = useState(true);
  const dispatch = useDispatch();

  const initialEmployeeInfo = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: statesToUse[0].value,
    zipCode: "",
    department: departments[0].value,
  };
  const [employeeInfo, setEmployeeInfo] = useState(initialEmployeeInfo);

  const handleDateChange = (selectedDate, name) => {
    setEmployeeInfo({ ...employeeInfo, [name]: selectedDate });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(add({ ...employeeInfo, id: new Date().getTime() }));

    setEmployeeInfo(initialEmployeeInfo);
    setResetFormKey(!resetFormKey);
  };
  return (
    <form id="create-employee" onSubmit={handleSubmit} key={resetFormKey}>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            First name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            or="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Last name
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Date of Birth
          </label>

          <DatePickerComponent
            id="date-of-birth"
            name="dateOfBirth"
            onChange={(selectedDate) =>
              handleDateChange(selectedDate, "dateOfBirth")
            }
            value={employeeInfo.dateOfBirth}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Start Date
          </label>
          <DatePickerComponent
            id="start-date"
            name="startDate"
            onChange={(selectedDate) =>
              handleDateChange(selectedDate, "startDate")
            }
            value={employeeInfo.startDate}
          />
        </div>
        <div>
          <label
            htmlFor="street-address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Adress
          </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="country"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          State
        </label>
        <select
          id="state"
          name="state"
          autoComplete="state-name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="postal-code"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          ZIP / Postal
        </label>
        <input
          type="text"
          name="postal-code"
          id="postal-code"
          autoComplete="postal-code"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="country"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Department
        </label>
        <select
          id="department"
          name="coudepartmentntry"
          autoComplete="department-name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option>Sales</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
      <div className="flex justify-end mt-14 mb-6">
        <div className="flex items-center h-5">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-lime-700 py-2 px-4 text-sm font-medium text-white shadow-sm ring-lime-700 hover:bg-lime-500 hover:ring-lime-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddForm;
