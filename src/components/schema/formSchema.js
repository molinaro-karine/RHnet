import * as yup from "yup";
//import moment from "moment";
//const today = new Date();

export const registerSchema = yup.object().shape({
  firstName: yup
    .string("firstName should be a string")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("firstName is required"),

  lastName: yup
    .string("lastName should be a string")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("remplir"),

  street: yup.string().max(600).required("please enter a valid address"),

  city: yup.string().max(600).required("please enter a valid address"),

  zipCode: yup
    .string()
    .length(5)
    .required("Invalid format for zip code (must contain digits only"),
});
