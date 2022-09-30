import React from 'react';
import Fhir from 'fhir/r4';
import { Input } from '@chakra-ui/react';
import {
  QuestionnaireResponseStateType,
  upsertQuestionnaireResponseItem,
} from '../../state/QuestionnaireResponseReducer';
import { useDispatch, useSelector } from 'react-redux';

const StringQuestionnaireItem = ({
  linkId,
  initial,
}: Fhir.QuestionnaireItem) => {
  const initialValue = useSelector(
    (state: QuestionnaireResponseStateType) =>
      state.item?.find((item) => item.linkId === linkId)?.answer?.[0]
        .valueString ?? initial?.[0].valueString
  );

  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(
      upsertQuestionnaireResponseItem({
        linkId: linkId,
        text: 'asdfsfdsf',
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
      variant='flushed'
      onChange={changeHandler}
      value={initialValue}
    />
  );
};

export default StringQuestionnaireItem;
