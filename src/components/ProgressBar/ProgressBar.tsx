import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { ProgressBarContext } from './ProgressBarContext';

export type ProgressBarContextType = number;

const ProgressBar = () => {
  const { progress } = React.useContext(ProgressBarContext);
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={progress} />
    </Box>
  );
};

export default ProgressBar;
