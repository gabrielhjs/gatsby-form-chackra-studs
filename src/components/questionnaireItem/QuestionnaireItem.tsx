import React from 'react';
import Fhir from 'fhir/r4';
import { Alert, AlertIcon, Box, FormLabel } from '@chakra-ui/react';

import DateQuestionnaireItem from './DateQuestionnaireItem';
import StringQuestionnaireItem from './StringQuestionnaireItem';
import DecimalQuestionnaireItem from './DecimalQuestionnaireItem';
import RadioQuestionnaireItem from './RadioQuestionnaireItem';
import CheckboxQuestionnaireItem from './CheckboxQuestionnaireItem';

export type TQuestionnaireItem = {
  questionnaireItem: Fhir.QuestionnaireItem;
};

const SwitchQuestionnaireItemType = ({
  questionnaireItem,
}: TQuestionnaireItem) => {
  switch (questionnaireItem.type) {
    case 'string':
      return (
        <StringQuestionnaireItem
          linkId={questionnaireItem.linkId}
          text={questionnaireItem.text}
          type='string'
        />
      );
    case 'group':
    case 'display':
      return (
        <>
          {questionnaireItem.item?.map((item) => {
            return (
              <QuestionnaireItem questionnaireItem={item} key={item.linkId} />
            );
          })}
        </>
      );
    case 'date':
      return (
        <DateQuestionnaireItem
          linkId={questionnaireItem.linkId}
          text={questionnaireItem.text}
          type='date'
        />
      );
    case 'decimal':
      return (
        <DecimalQuestionnaireItem
          linkId={questionnaireItem.linkId}
          text={questionnaireItem.text}
          extension={questionnaireItem.extension}
          type='decimal'
        />
      );
    case 'choice':
      return questionnaireItem.repeats ? (
        <CheckboxQuestionnaireItem
          linkId={questionnaireItem.linkId}
          text={questionnaireItem.text}
          answerOption={questionnaireItem.answerOption}
          type='choice'
        />
      ) : (
        <RadioQuestionnaireItem
          linkId={questionnaireItem.linkId}
          text={questionnaireItem.text}
          answerOption={questionnaireItem.answerOption}
          type='choice'
        />
      );
    default:
      console.log(`type: (${questionnaireItem.type}) not implemented`);
      return (
        <Alert status='error'>
          <AlertIcon />
          Answer type ({questionnaireItem.type}) not implemented
        </Alert>
      );
  }
};

const QuestionnaireItem = ({ questionnaireItem }: TQuestionnaireItem) => {
  return (
    <Box>
      <FormLabel>
        {questionnaireItem.type !== 'group'
          ? questionnaireItem.text
          : undefined}
      </FormLabel>
      <SwitchQuestionnaireItemType questionnaireItem={questionnaireItem} />
    </Box>
  );
};

export default QuestionnaireItem;
