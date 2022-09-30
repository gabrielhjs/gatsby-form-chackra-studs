import Fhir from 'fhir/r4';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type QuestionnaireResponseStateType = Fhir.QuestionnaireResponse & {
  item: Fhir.QuestionnaireResponseItem[];
};

const initialState: QuestionnaireResponseStateType = {
  resourceType: 'QuestionnaireResponse',
  status: 'in-progress',
  authored: new Date().toISOString(),
  item: [],
};

const questionnaireResponseSlice = createSlice({
  name: 'questionnaireResponse',
  initialState,
  reducers: {
    upsertQuestionnaireResponseItem: (
      state,
      action: PayloadAction<Fhir.QuestionnaireResponseItem>
    ) => {
      const { payload } = action;
      const index = state.item.findIndex(
        (item) => item.linkId === payload.linkId
      );

      if (index > -1) state.item![index] = payload;
      else state.item.push(action.payload);
    },
  },
});

export const { upsertQuestionnaireResponseItem } =
  questionnaireResponseSlice.actions;

export default questionnaireResponseSlice.reducer;
