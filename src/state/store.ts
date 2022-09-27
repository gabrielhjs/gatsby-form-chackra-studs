import { configureStore } from '@reduxjs/toolkit';
import questionnaireResponseReducer from './QuestionnaireResponseReducer';

const store = configureStore({
  reducer: questionnaireResponseReducer,
});

export default store;
