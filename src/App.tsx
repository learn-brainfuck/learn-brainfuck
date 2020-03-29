import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { store } from 'store';
import Header from 'components/Header';
import Home from 'screens/Home';
import Levels from 'screens/Levels';
import Lesson from 'screens/Lesson';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () =>  (
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </Provider>
);

const Router: React.FC = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/levels" component={Levels} />
      <Route exact path="/lesson/:id" component={Lesson} />
    </Switch>
  </BrowserRouter>
);

export default App;
