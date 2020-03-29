import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';

import CodeMirror from 'react-codemirror2';
require('codemirror/mode/brainfuck/brainfuck');

ReactDOM.render(<App />, document.getElementById('root'));
