import React from 'react';
import Fhir from 'fhir/r4';
import {
  Checkbox,
  CheckboxGroup,
  useCheckbox,
  useCheckboxGroup,
  UseCheckboxProps,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { upsertQuestionnaireResponseItem } from '../../state/QuestionnaireResponseReducer';
import { getItemAnswer } from './utils/getItemAnswer';

const CustomCheckbox = (props: UseCheckboxProps) => {
  const { state } = useCheckbox(props);

  return (
    <Checkbox checked={state.isChecked} value={props.value} paddingRight={4}>
      {props?.name}
    </Checkbox>
  );
};

const CheckboxQuestionnaireItem = ({
  linkId,
  answerOption,
  text,
}: Fhir.QuestionnaireItem) => {
  const questionnaireResponseItemAnswer = getItemAnswer(linkId);
  const defaultValue: string[] = [];

  questionnaireResponseItemAnswer?.forEach((item) =>
    item.valueCoding?.code ? defaultValue.push(item.valueCoding.code) : null
  );

  console.log(defaultValue, questionnaireResponseItemAnswer);

  const { getCheckboxProps } = useCheckboxGroup();

  const dispatch = useDispatch();

  const changeHandler = (checkeds: string[]) => {
    dispatch(
      upsertQuestionnaireResponseItem({
        linkId: linkId,
        text,
        answer: checkeds.map((code) => {
          return {
            valueCoding: {
              code,
              display: answerOption?.find(
                (item) => item.valueCoding?.code === code
              )?.valueCoding?.display,
            },
          };
        }),
      })
    );
  };

  return (
    <CheckboxGroup onChange={changeHandler} defaultValue={defaultValue}>
      {answerOption?.map((answerOption) => {
        return (
          <CustomCheckbox
            key={answerOption.valueCoding?.code}
            {...getCheckboxProps({
              value: answerOption.valueCoding?.code,
              name: answerOption.valueCoding?.display,
            })}
          />
        );
      })}
    </CheckboxGroup>
  );
};

export default CheckboxQuestionnaireItem;
