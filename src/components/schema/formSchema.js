import * as yup from "yup";

/* Validation schema for the form. */
export const registerSchema = yup.object().shape({
  firstName: yup
    .string("")
    .min(3)
    .max(50)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("firstName is required"),

  lastName: yup
    .string("")
    .min(3)
    .max(50)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("remplir"),

  street: yup.string().max(250).required("please enter a valid address"),

  city: yup.string().max(50).required("please enter a valid address"),
  //state: yup.string().required("please select state"),

  zipCode: yup
    .string()
    .length(5)
    .required("Invalid format for zip code (must contain digits only"),
});
