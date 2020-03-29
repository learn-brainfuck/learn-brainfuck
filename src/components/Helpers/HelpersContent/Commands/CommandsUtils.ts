import { Command } from './CommandsTypes';

export const commandsList: Command[] = [
  {
    symbol: '>',
    description: 'Move the pointer to the right',
  },
  {
    symbol: '<',
    description: 'Move the pointer to the left',
  },
  {
    symbol: '+',
    description: 'Increment the memory cell under the pointer',
  },
  {
    symbol: '-',
    description: 'Decrement the memory cell under the pointer',
  },
  {
    symbol: '.',
    description: 'Output the character signified by the cell at the pointer',
  },
  {
    symbol: ',',
    description: 'Input a character and store it in the cell at the pointer',
  },
  {
    symbol: '[',
    description: 'Jump past the matching  ]  if the cell under the pointer is 0',
  },
  {
    symbol: ']',
    description: 'Jump back to the matching  [  if the cell under the pointer is nonzero',
  },
];
