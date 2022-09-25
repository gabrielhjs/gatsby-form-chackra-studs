import React from 'react';
import R4 from 'fhir/r4';
import { FormControl, Button, Box } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

import QuestionnaireItem from '../QuestionnaireItem';
import { ProgressBarDispatcher } from '../ProgressBar/ProgressBarContext';
import { questionnaire as initialQuestionnaire } from './questionnaire';

type QuestionnaireStateType = {
  item: {
    index: number;
    QuestionnaireItem: R4.QuestionnaireItem;
    isFirst: boolean;
    isLast: boolean;
  };
  questionnaireResponse: R4.QuestionnaireResponse;
};

const questionnaireHandler = ({
  event,
  updateQuestionnaireResponse,
  questionnaireItem,
  questionnaireResponse,
}: {
  event: React.FormEvent<HTMLFormElement>;
  questionnaireItem: R4.QuestionnaireItem;
  questionnaireResponse: R4.QuestionnaireResponse;
  updateQuestionnaireResponse: React.Dispatch<
    React.SetStateAction<R4.QuestionnaireResponse>
  >;
}) => {
  event.preventDefault();

  const itemIndex = questionnaireResponse.item!.findIndex(
    (item) => item.linkId === questionnaireItem.linkId
  );
  const questionnaireResponseItem: R4.QuestionnaireResponseItem = {
    linkId: questionnaireItem.linkId,
    text: questionnaireItem.text,
    answer: [
      {
        [`value${questionnaireItem
          .type!.slice(0, 1)
          .toUpperCase()}${questionnaireItem.type!.slice(1)}`]: 'asd',
      },
    ],
  };

  if (itemIndex >= 0) {
    questionnaireResponse.item![itemIndex] = questionnaireResponseItem;
  } else {
    questionnaireResponse.item!.push(questionnaireResponseItem);
  }

  updateQuestionnaireResponse(questionnaireResponse);
  console.log(questionnaireResponse);
};

const Questionnaire = () => {
  const progressBarDispatcher = React.useContext(ProgressBarDispatcher);

  const [questionnaireResponse, updateQuestionnaireResponse] =
    React.useState<R4.QuestionnaireResponse>({
      resourceType: 'QuestionnaireResponse',
      status: 'in-progress',
      authored: new Date().toISOString(),
      item: [],
    });

  const [item, updateItem] = React.useState({
    index: 0,
    isFirst: true,
    isLast: false,
    QuestionnaireItem: initialQuestionnaire.item![0],
  });

  const changeQuestion = (nextIndex: number) => {
    const questionnaireLenght = initialQuestionnaire.item!.length;
    let isFirst, isLast: boolean;

    switch (nextIndex) {
      case 0:
        isFirst = true;
        isLast = false;
      case questionnaireLenght - 1:
        isFirst = false;
        isLast = true;
      default:
        isFirst = false;
        isLast = false;
    }

    updateItem({
      isFirst,
      isLast,
      index: nextIndex,
      QuestionnaireItem: initialQuestionnaire.item![nextIndex],
    });

    progressBarDispatcher({
      progress: (100 * nextIndex) / (questionnaireLenght - 1),
    });
  };

  return (
    <Box>
      <form
        className={'Form'}
        onSubmit={(event) => {
          questionnaireHandler({
            event,
            updateQuestionnaireResponse,
            questionnaireResponse,
            questionnaireItem: item.QuestionnaireItem,
          });
        }}
      >
        <Box component='div' sx={{ display: 'inline' }}>
          <Button
            disabled={item.isFirst}
            onClick={() => {
              changeQuestion(item.index - 1);
            }}
          >
            <ArrowBackIos sx={{ width: 'auto' }} />
          </Button>
        </Box>
        <Box component='div' sx={{ display: 'inline' }}>
          <FormControl>
            <QuestionnaireItem questionnaireItem={item.QuestionnaireItem} />
          </FormControl>
        </Box>
        <Box component='div' sx={{ display: 'inline' }}>
          <Button
            type='submit'
            disabled={item.isLast}
            onClick={() => {
              changeQuestion(item.index + 1);
            }}
          >
            <ArrowForwardIos />
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Questionnaire;
