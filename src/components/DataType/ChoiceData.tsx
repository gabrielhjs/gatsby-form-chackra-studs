import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import R4 from 'fhir/r4';

export type ChoiceDataArgs = {
  choices: R4.QuestionnaireItemAnswerOption[];
};

const ChoiceData = ({ choices }: ChoiceDataArgs) => {
  const [choice, setChoice] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => 
    setChoice(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Sua opção</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={choice}
          label='Sua opção'
          onChange={handleChange}
        >
          {choices.map((choice) => (
            <MenuItem
              key={choice.valueCoding?.code}
              value={choice.valueCoding?.display}
            >
              {choice.valueCoding?.display}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ChoiceData;
