//libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/employeeSlice";

//components
import DatePickerComponent from "./DatePicker";

import { departments, states } from "../data/dataStates";
import SelectForm from "./SelectForm";

const AddForm = () => {
  // change structure of state options object to make it work with select
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

  const handleChange = (event) => {
    setEmployeeInfo({
      ...employeeInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(add({ ...employeeInfo, id: new Date().getTime() }));

    setEmployeeInfo(initialEmployeeInfo);
    setResetFormKey(!resetFormKey);
  };

  const handleStateOptionChange = (newSelection) => {
    setEmployeeInfo({ ...employeeInfo, state: newSelection });
  };
  const handleDepartmentOptionChange = (newSelection) => {
    setEmployeeInfo({ ...employeeInfo, department: newSelection });
  };
  const handleDateChange = (selectedDate, name) => {
    setEmployeeInfo({ ...employeeInfo, [name]: selectedDate });
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
            className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            type="text"
            id="first-name"
            name="firstName"
            value={employeeInfo.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Last name
          </label>
          <input
            className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            type="text"
            id="last-name"
            name="last-name"
            value={employeeInfo.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label
            htmlFor="date-of-birth"
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
            htmlFor="start-date"
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
            htmlFor="street"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Adress
          </label>
          <input
            className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            type="text"
            id="street"
            name="street"
            value={employeeInfo.street}
            onChange={(e) => handleChange(e)}
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
            className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            type="text"
            id="city"
            name="city"
            value={employeeInfo.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="state"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          State
        </label>
        <SelectForm
          options={statesToUse}
          onChange={handleStateOptionChange}
          value={employeeInfo.state}
          id="state"
          name="state"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="zip-code"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          ZIP / Postal
        </label>
        <input
          className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          id="zip-code"
          name="zipCode"
          type="number"
          value={employeeInfo.zipCode}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="country"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Department
        </label>
        <SelectForm
          options={departments}
          onChange={handleDepartmentOptionChange}
          id="department"
          name="department"
        />
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
