import React from 'react';
import Fhir from 'fhir/r4';
import { Input } from '@chakra-ui/react';
import { getItemAnswer } from './utils/getItemAnswer';
import { upsertQuestionnaireResponseItem } from '../../state/QuestionnaireResponseReducer';
import { useDispatch } from 'react-redux';

const DateQuestionnaireItem = ({ linkId, text }: Fhir.QuestionnaireItem) => {
  const questionnaireResponseItemAnswer = getItemAnswer(linkId);
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(
      upsertQuestionnaireResponseItem({
        linkId: linkId,
        text,
        answer: [
          {
            valueDate: value,
          },
        ],
      })
    );
  };

  return (
    <Input
      name={linkId}
      variant='flushed'
      type='date'
      onChange={changeHandler}
      value={questionnaireResponseItemAnswer?.[0].valueDate}
    />
  );
};

export default DateQuestionnaireItem;
