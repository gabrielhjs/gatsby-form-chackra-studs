import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Fhir from 'fhir/r4';

const Review = () => {
  const answers = useSelector<
    Fhir.QuestionnaireResponse,
    Fhir.QuestionnaireResponseItem[]
  >((state) => state.item!);

  return (
    <Box width={'80%'} mt={2} alignSelf={'center'}>
      {JSON.stringify(answers, null, 2)}
      <Button>Enviar</Button>
    </Box>
  );
};

export default Review;
