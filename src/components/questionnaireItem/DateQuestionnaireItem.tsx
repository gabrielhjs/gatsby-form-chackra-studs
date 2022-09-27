import React, { useState } from 'react';
import Fhir from 'fhir/r4';
import { Input } from '@chakra-ui/react';

const DateQuestionnaireItem = ({ linkId, initial }: Fhir.QuestionnaireItem) => {
  const [questionnaireResponseItemAnswer, setQuestionnaireResponseItemAnswer] =
    useState<Fhir.QuestionnaireResponseItemAnswer>({
      valueString: initial?.[0].valueDate,
    });

  return (
    <Input
      name={linkId}
      variant='flushed'
      type='date'
      onChange={(event) => {
        setQuestionnaireResponseItemAnswer({
          valueDate: event.target.value,
        });
      }}
      value={questionnaireResponseItemAnswer.valueString}
    />
  );
};

export default DateQuestionnaireItem;
