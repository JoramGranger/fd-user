import { configureStore } from "@reduxjs/toolkit";
import formsSlice from "../Features/formsSlice";
import globalSlice from "../Features/globalSlice";
import productsSlice from "../Features/productsSlice";
// import userSlice from "../Features/userSlice";

import userSlice from "../Features/users/userSlice"
import authSlice from '../Features/auth/authSlice';


export const store = configureStore({
  reducer: {  
    auth: authSlice,
    user: userSlice,  
    global: globalSlice,
    products: productsSlice,
    forms: formsSlice,
  },
});
