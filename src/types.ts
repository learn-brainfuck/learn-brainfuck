import { RootState as RootStateOrigin } from 'store';

export type RootState = RootStateOrigin;

export interface Lesson {
  id: string;
  title: string;
  description: JSX.Element;
}

export interface Level {
  title: string;
  lessons: Lesson[];
}
