import React from 'react';
import Fhir from 'fhir/r4';
import { Input } from '@chakra-ui/react';
import { upsertQuestionnaireResponseItem } from '../../state/QuestionnaireResponseReducer';
import { useDispatch } from 'react-redux';
import { getItemAnswer } from './utils/getItemAnswer';

const StringQuestionnaireItem = ({ linkId, text }: Fhir.QuestionnaireItem) => {
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
            valueString: value,
          },
        ],
      })
    );
  };

  return (
    <Input
      name={linkId}
      onChange={changeHandler}
      value={questionnaireResponseItemAnswer?.[0].valueString}
    />
  );
};

export default StringQuestionnaireItem;
