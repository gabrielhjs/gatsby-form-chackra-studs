import React, { useState } from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  SlideFade,
  useDisclosure,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Fhir from 'fhir/r4';

const Stepper = () => {
  const { setStep, activeStep, reset } = useSteps({
    initialStep: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: true });

  const [questionnaireResponse, setQuestionnaireResponse] =
    useState<Fhir.QuestionnaireResponse>({
      resourceType: 'QuestionnaireResponse',
      status: 'in-progress',
      authored: new Date().toISOString(),
      item: [],
    });

  const updateQuestionnaireResponse = (
    questionnaireResponseItem: Fhir.QuestionnaireResponseItem
  ) => {
    const index = questionnaireResponse.item!.findIndex(
      (element) => element.linkId === questionnaireResponseItem.linkId
    );
    if (index > -1)
      questionnaireResponse.item![index] = questionnaireResponseItem;
    else questionnaireResponse.item!.push(questionnaireResponseItem);
    setQuestionnaireResponse(questionnaireResponse);
  };

  const [formResp, setFormResp] = useState({ email: '', pass: '' });

  const handlePartialSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setFormResp({ ...formResp, [name]: value });

    const questionnaireResponseItem: Fhir.QuestionnaireResponseItem = {
      linkId: name,
      text: 'asdf',
      answer: [
        {
          valueString: value,
        },
      ],
    };
    updateQuestionnaireResponse(questionnaireResponseItem);
  };

  const sendPartialData = () => {
    console.log(JSON.stringify(questionnaireResponse, 2));
  };

  return (
    <FormControl height='100vh'>
      <Flex>
        <IconButton
          aria-label='left-arrow'
          variant='ghost'
          height='100vh'
          width='8%'
          onClick={() => {
            setStep(activeStep - 1);
            onClose();
          }}
        >
          <BiLeftArrowAlt size='40px' />
        </IconButton>
        <Box width={'100%'}>
          <Steps activeStep={activeStep} p={2}>
            <Step label={'User Login'} key={1}>
              <SlideFade in={isOpen} offsetX='100vw'>
                <Box width={'80%'} mt={2} alignSelf={'center'}>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type='email'
                    name='email'
                    value={formResp.email}
                    onChange={handlePartialSubmit}
                  />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </Box>
              </SlideFade>
            </Step>
            <Step label={'Interests'} key={2}>
              <SlideFade in={isOpen} offsetX='100vw'>
                <Box width={'80%'} mt={2} alignSelf={'center'}>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    value={formResp.pass}
                    name='pass'
                    onChange={handlePartialSubmit}
                  />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </Box>
              </SlideFade>
            </Step>
            <Step label={'Portfolio'} key={3}>
              <SlideFade in={isOpen} offsetX='100vw'>
                <FormLabel as='legend'>Favorite Naruto Character</FormLabel>
                <RadioGroup defaultValue='Itachi'>
                  <HStack spacing='24px'>
                    <Radio value='Sasuke'>Sasuke</Radio>
                    <Radio value='Nagato'>Nagato</Radio>
                    <Radio value='Itachi'>Itachi</Radio>
                    <Radio value='Sage of the six Paths'>
                      Sage of the six Paths
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormHelperText>Select only if you're a fan.</FormHelperText>
              </SlideFade>
            </Step>
            <Step label={'Revisão'} key={4}>
              <SlideFade in={isOpen} offsetX='100vw'>
                <Button
                  width={'80%'}
                  onClick={() => {
                    reset();
                  }}
                >
                  Concluir
                </Button>
              </SlideFade>
            </Step>
          </Steps>
        </Box>
        <IconButton
          type='submit'
          aria-label='right-arrow'
          variant='ghost'
          height='100vh'
          width='8%'
          onClick={() => {
            setStep(activeStep + 1);
            onOpen();
            sendPartialData();
          }}
        >
          <BiRightArrowAlt size='40px' />
        </IconButton>
      </Flex>
    </FormControl>
  );
};

export default Stepper;
