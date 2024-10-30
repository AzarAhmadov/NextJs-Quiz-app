import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export interface quizState {
  correctAnswer: number;
  wrongAnswer: number;
}

const initialState: quizState = {
  correctAnswer: 0,
  wrongAnswer: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getCorrectAnswers: (state) => {
      state.correctAnswer += 1;
    },
    getWrongAnswers: (state) => {
      state.wrongAnswer += 1;
    },
    resetQuiz: (state) => {
      state.correctAnswer = 0;
      state.wrongAnswer = 0;
    },
  },
});

export const { getCorrectAnswers, getWrongAnswers, resetQuiz } =
  quizSlice.actions;

export const useQuiz = () => useSelector((state: RootState) => state.quiz);

export default quizSlice.reducer;
