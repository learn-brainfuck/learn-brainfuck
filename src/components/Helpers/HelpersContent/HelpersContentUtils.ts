import * as R from 'ramda';
import { Tab } from './HelpersContentTypes';

import Commands from './Commands';
import Sources from './Sources';
import AsciiTable from './AsciiTable';

export const elementId = (index: any, type: 'tab' | 'tabpanel'): string => (
  R.join('-', ['helpers', type, index])
);

export const a11yProps = (index: any) => ({
  id: elementId(index, 'tab'),
  'aria-controls': elementId(index, 'tabpanel'),
});

export const tabsConfig: Tab[] = [
  {
    index: 0,
    title: 'Commands',
    children: Commands
  },
  {
    index: 1,
    title: 'ASCII table',
    children: AsciiTable
  },
  {
    index: 2,
    title: 'Sources',
    children: Sources
  },
];
