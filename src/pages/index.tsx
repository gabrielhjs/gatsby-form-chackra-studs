import React from 'react';
import Stepper from '../Stepper';
import { ChakraProvider, CSSReset, Box, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  components: {
    Steps,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box>
        <Stepper />
      </Box>
    </ChakraProvider>
  );
}

export default App;
