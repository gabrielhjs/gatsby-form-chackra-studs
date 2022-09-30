import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Fhir from 'fhir/r4';

const Review = () => {
  const questionnaireResponse = useSelector<
    Fhir.QuestionnaireResponse,
    Fhir.QuestionnaireResponse
  >((state) => state);

  return (
    <Box width={'80%'} mt={2} alignSelf={'center'}>
      <pre>{JSON.stringify(questionnaireResponse, null, 2)}</pre>
      <Button>Enviar</Button>
    </Box>
  );
};

export default Review;
