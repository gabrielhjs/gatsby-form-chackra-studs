import { useSelector } from 'react-redux';
import Fhir from 'fhir/r4';

import { QuestionnaireResponseStateType } from '../../../state/QuestionnaireResponseReducer';

export type QuestionnaireAnswerInitialState =
  | Fhir.QuestionnaireResponseItemAnswer[]
  | undefined;

export const getItemAnswer = (
  linkId: string
): QuestionnaireAnswerInitialState => {
  return useSelector<
    QuestionnaireResponseStateType,
    QuestionnaireAnswerInitialState
  >(
    (state: QuestionnaireResponseStateType) =>
      state.item?.find((item) => item.linkId === linkId)?.answer
  );
};
