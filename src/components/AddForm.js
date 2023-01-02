//libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { add } from "../redux/employeeSlice";

//components
import DatePickerComponent from "./DatePicker";
//import Modal from "./Modal";
import { registerSchema } from "./schema/formSchema";
import SelectForm from "./SelectForm";
import { departments, states } from "../data/dataStates";
import DatePickerOfBirth from "./DatePickerOfBirth";
import { ModalComponent } from "./ModalComponent";

/**
 * The AddForm function is a React component that uses the useForm hook to create a form that validates
 * the input using the yupResolver function.
 */
const AddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  /* change structure of state options object to make it work with select. */
  const statesToUse = states.map((state) => {
    return {
      value: state.abbreviation,
      label: state.name,
    };
  });

  const [isVisibleModal, setisVisibleModal] = useState(false);
  const [resetFormKey, setResetFormKey] = useState(true);

  const dispatch = useDispatch();

  /* Setting the initial state of the form. */
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

  /**
   * The handleChange function is used to update the state of the employeeInfo object.
   * @param event - The event that triggered the function.
   */
  const handleChange = (event) => {
    setEmployeeInfo({
      ...employeeInfo,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * It dispatches an action to add the employee info to the store, sets the modal to visible, resets the
   * employee info to the initial state, and resets the form key.
   */
  const formSubmitHandler = () => {
    dispatch(add({ ...employeeInfo, id: new Date().getTime() }));
    setisVisibleModal(true);
    setEmployeeInfo(initialEmployeeInfo);
    setResetFormKey(!resetFormKey);
  };

  /**
   * When the user selects a new state, update the state of the employeeInfo object with the new
   * selection.
   * @param newSelection - the new value of the select box
   */
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
    <form
      id="create-employee"
      onSubmit={handleSubmit(formSubmitHandler)}
      key={resetFormKey}
    >
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            First name
          </label>
          <input
            {...register("firstName")}
            className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            type="text"
            id="first-name"
            name="firstName"
            value={employeeInfo.firstName}
            onChange={(e) => handleChange(e)}
          />
          {errors.firstName && (
            <span className="text-red-900">{errors.firstName.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Last name
          </label>
          <input
            {...register("lastName")}
            className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            type="text"
            id="last-name"
            name="lastName"
            value={employeeInfo.lastName}
            onChange={(e) => handleChange(e)}
          />
          {errors.firstName && (
            <span className="text-red-900">{errors.firstName.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="date-of-birth"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Date of Birth
          </label>
          <DatePickerOfBirth
            id="date-of-birth"
            name="dateOfBirth"
            onChange={(selectedDate) =>
              handleDateChange(selectedDate, "dateOfBirth")
            }
            value={employeeInfo.dateOfBirth}
          />
          {errors.dateOfBirth ? (
            <span className="text-red-900">{errors.dateOfBirth.message}</span>
          ) : (
            <></>
          )}
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
            Address
          </label>
          <input
            {...register("street")}
            className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            type="text"
            id="street"
            name="street"
            value={employeeInfo.street}
            onChange={(e) => handleChange(e)}
          />
          {errors.street ? (
            <span className="text-red-900">{errors.street.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            City
          </label>
          <input
            {...register("city")}
            className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            type="text"
            id="city"
            name="city"
            value={employeeInfo.city}
            onChange={(e) => handleChange(e)}
          />
          {errors.city ? (
            <span className="text-red-900">{errors.city.message}</span>
          ) : (
            <></>
          )}
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
          {...register("zipCode")}
          className="formInputs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          id="zip-code"
          name="zipCode"
          type="number"
          //pattern="(/^\d{5}(?:[-\s]\d{4})?$/)"
          value={employeeInfo.zipCode}
          onChange={(e) => handleChange(e)}
        />
        {errors.zipCode ? (
          <span className="text-red-900">{errors.zipCode.message}</span>
        ) : (
          <></>
        )}
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
            className="modal-toggle inline-block rounded-lg bg-lime-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-lime-700 hover:bg-lime-500 hover:ring-lime-500"
          >
            Save
          </button>
          <ModalComponent
            isVisible={isVisibleModal}
            message={"Employee Created!"}
            handleClose={() => setisVisibleModal(false)}
          />
        </div>
      </div>
    </form>
  );
};

export default AddForm;
