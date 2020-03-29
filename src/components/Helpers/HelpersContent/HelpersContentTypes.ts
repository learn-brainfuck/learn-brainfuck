import React from 'react';

export interface Tab {
  index: number;
  title: string;
  children?: React.ReactNode;
}
