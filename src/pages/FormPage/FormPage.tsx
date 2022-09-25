import React from 'react';
import Form from '../../components/Form/Form';

import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {
  ProgressBarContext,
  ProgressBarDispatcher,
} from '../../components/ProgressBar/ProgressBarContext';

const FormPage = () => {
  const [progress, dispatch] = React.useState({ progress: 0 });
  return (
    <>
      <ProgressBarContext.Provider value={progress}>
        <ProgressBar />
      </ProgressBarContext.Provider>
      <ProgressBarDispatcher.Provider value={dispatch}>
        <Form />
      </ProgressBarDispatcher.Provider>
    </>
  );
};

export default FormPage;
