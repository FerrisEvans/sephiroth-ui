import {configureStore} from "@reduxjs/toolkit";
import i18nReducer from "@/stores/i18n";

const store = configureStore({
  reducer: {
    i18n: i18nReducer
  }
})

export default store