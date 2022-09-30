import React from 'react';
import Fhir from 'fhir/r4';
import { Alert, AlertIcon, FormLabel } from '@chakra-ui/react';

import DateQuestionnaireItem from './DateQuestionnaireItem';
import StringQuestionnaireItem from './StringQuestionnaireItem';
import DecimalQuestionnaireItem from './DecimalQuestionnaireItem';
import QuantityQuestionnaireItem from './QuantityQuestionnaireItem';

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
          initial={questionnaireItem.initial}
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
          initial={questionnaireItem.initial}
          type='date'
        />
      );
    case 'decimal':
      return (
        <DecimalQuestionnaireItem
          linkId={questionnaireItem.linkId}
          initial={questionnaireItem.initial}
          type='decimal'
        />
      );
    case 'quantity':
      return (
        <QuantityQuestionnaireItem
          linkId={questionnaireItem.linkId}
          initial={questionnaireItem.initial}
          type='quantity'
        />
      );
    default:
      console.log(`type: (${questionnaireItem.type}) not implemented`);
      return (
        <Alert status='warning'>
          <AlertIcon />
          Answer type ({questionnaireItem.type}) not implemented
        </Alert>
      );
  }
};

const QuestionnaireItem = ({ questionnaireItem }: TQuestionnaireItem) => {
  return (
    <>
      <FormLabel>
        {questionnaireItem.type !== 'group'
          ? questionnaireItem.text
          : undefined}
      </FormLabel>
      <SwitchQuestionnaireItemType questionnaireItem={questionnaireItem} />
    </>
  );
};

export default QuestionnaireItem;
