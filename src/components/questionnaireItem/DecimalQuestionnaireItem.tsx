import React, { useState } from 'react';
import Fhir from 'fhir/r4';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  upsertQuestionnaireResponseItem,
  QuestionnaireResponseStateType,
} from '../../state/QuestionnaireResponseReducer';

const DecimalQuestionnaireItem = ({
  linkId,
  initial,
}: Fhir.QuestionnaireItem) => {
  const questionnaireResponseItemAnswer = useSelector(
    (state: QuestionnaireResponseStateType) =>
      state.item?.find((item) => item.linkId === linkId)?.answer?.[0]
        .valueDecimal ?? initial?.[0].valueDecimal
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
            valueDecimal: Number(value),
          },
        ],
      })
    );
  };

  return (
    <NumberInput value={questionnaireResponseItemAnswer}>
      <NumberInputField name={linkId} type='number' onChange={changeHandler} />
    </NumberInput>
  );
};

export default DecimalQuestionnaireItem;
