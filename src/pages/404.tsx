import React from 'react';
import { HeadFC } from 'gatsby';
import { Center, CSSReset, Text } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <>
      <CSSReset />
      <Center height={'100vh'}>
        <Text fontSize={200}>404</Text>
      </Center>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
