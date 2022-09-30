import React from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Box, Flex, FormControl, IconButton } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Question from './components/questionnaireItem/QuestionnaireItem';
import questionnaire from './quetionnaire';
import Review from './components/Review';

const Stepper = () => {
  const { setStep, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <FormControl height='100vh'>
      <Flex>
        <IconButton
          aria-label='left-arrow'
          variant='ghost'
          height='100vh'
          width='8%'
          disabled={activeStep === 0}
          onClick={() => {
            setStep(activeStep - 1);
          }}
        >
          <BiLeftArrowAlt size='40px' />
        </IconButton>
        <Box width={'100%'}>
          <Steps activeStep={activeStep} p={2}>
            {questionnaire.item?.map((item, index) => {
              return (
                <Step
                  label={item.type === 'group' ? item.text : undefined}
                  key={index + 1}
                >
                  <Box mt={2}>
                    <Question questionnaireItem={item} />
                  </Box>
                </Step>
              );
            })}
            <Step label='Revisão' key={questionnaire.item?.length}>
              <Review />
            </Step>
          </Steps>
        </Box>
        <IconButton
          type='submit'
          aria-label='right-arrow'
          variant='ghost'
          height='100vh'
          width='8%'
          disabled={
            questionnaire.item ? activeStep >= questionnaire.item.length : true
          }
          onClick={() => {
            setStep(activeStep + 1);
          }}
        >
          <BiRightArrowAlt size='40px' />
        </IconButton>
      </Flex>
    </FormControl>
  );
};

export default Stepper;
