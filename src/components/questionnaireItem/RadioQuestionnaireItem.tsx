import React, { useState } from 'react';
import Fhir from 'fhir/r4';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { upsertQuestionnaireResponseItem } from '../../state/QuestionnaireResponseReducer';
import { getItemAnswer } from './utils/getItemAnswer';

const RadioQuestionnaireItem = ({
  linkId,
  answerOption,
  text,
}: Fhir.QuestionnaireItem) => {
  const questionnaireResponseItemAnswer = getItemAnswer(linkId);

  const dispatch = useDispatch();

  const changeHandler = (value: string) => {
    const index = Number(value);
    dispatch(
      upsertQuestionnaireResponseItem({
        linkId: linkId,
        text,
        answer: [
          {
            valueCoding: {
              code: value,
              display: answerOption?.find(
                (item) => item.valueCoding?.code === value
              )?.valueCoding?.display,
            },
          },
        ],
      })
    );
  };

  return (
    <RadioGroup
      onChange={changeHandler}
      value={questionnaireResponseItemAnswer?.[0].valueCoding?.code}
    >
      <Stack direction='row' spacing={5}>
        {answerOption?.map((answerOption) => {
          return (
            <Radio
              value={answerOption.valueCoding?.code}
              key={answerOption.valueCoding?.code}
            >
              {answerOption.valueCoding?.display}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default RadioQuestionnaireItem;
