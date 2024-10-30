import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "@/lib/features/quizSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      quiz: quizSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
