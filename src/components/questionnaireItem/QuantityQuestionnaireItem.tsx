import React, { useState } from 'react';
import Fhir from 'fhir/r4';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

const QuantityQuestionnaireItem = ({
  linkId,
  initial,
}: Fhir.QuestionnaireItem) => {
  const [questionnaireResponseItemAnswer, setQuestionnaireResponseItemAnswer] =
    useState<Fhir.QuestionnaireResponseItemAnswer>({
      valueString: initial?.[0].valueDate,
    });

  return (
    <NumberInput>
      <NumberInputField
        name={linkId}
        type='number'
        onChange={(event) => {
          setQuestionnaireResponseItemAnswer({
            valueDate: event.target.value,
          });
        }}
        value={questionnaireResponseItemAnswer.valueString}
      />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityQuestionnaireItem;
