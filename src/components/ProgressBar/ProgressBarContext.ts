import React from 'react';

export type ProgressBarContextType = {
  progress: number;
};

export const ProgressBarContext = React.createContext({ progress: 0 });
export const ProgressBarDispatcher = React.createContext<
  React.Dispatch<React.SetStateAction<ProgressBarContextType>>
>((_) => {
  console.error('Dispatcher not provided!');
});
