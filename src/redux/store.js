import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";

/* Creating a store with the reducer. */
export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
