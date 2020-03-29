import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { interpreterReducer, InterpreterState } from './interpreter';

export interface RootState {
  interpreter: InterpreterState;
}

const rootReducer = combineReducers({
  interpreter: interpreterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
