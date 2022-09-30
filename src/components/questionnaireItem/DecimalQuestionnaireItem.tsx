import React from 'react';
import Fhir from 'fhir/r4';
import {
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { upsertQuestionnaireResponseItem } from '../../state/QuestionnaireResponseReducer';
import { getItemAnswer } from './utils/getItemAnswer';

const DecimalQuestionnaireItem = ({
  linkId,
  text,
  extension,
}: Fhir.QuestionnaireItem) => {
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
            valueDecimal: Number(value),
          },
        ],
      })
    );
  };

  const unit = extension?.find((item) => !!item.valueCoding)?.valueCoding?.code;

  return (
    <NumberInput value={questionnaireResponseItemAnswer?.[0].valueDecimal}>
      <InputGroup>
        <NumberInputField
          name={linkId}
          type='number'
          onChange={changeHandler}
          borderRightRadius={0}
        />
        {unit ? <InputRightAddon children={unit} /> : undefined}
      </InputGroup>
    </NumberInput>
  );
};

export default DecimalQuestionnaireItem;
