import React from 'react';
import R4 from 'fhir/r4';
import StringData from './DataType/StringData';
import ChoiceData from './DataType/ChoiceData';

export type QuestionnaireItemArgs = {
  questionnaireItem: R4.QuestionnaireItem;
};

const QuestionnaireItem = ({ questionnaireItem }: QuestionnaireItemArgs) => {
  switch (questionnaireItem.type) {
    case 'string':
      return StringData();
    case 'choice':
      return ChoiceData({ choices: questionnaireItem.answerOption! });
    default:
      console.log('asd');
  }
};

export default QuestionnaireItem;
