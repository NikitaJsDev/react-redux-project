import React from 'react';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store/store';
import MaterialUiForm from './components/MaterialUiForm';
import AppBar from './components/AppBar';
import AppTable from './components/AppTable';
import injectTapEvent from 'react-tap-event-plugin';

try {
  injectTapEvent();
} catch (err) {}

export default () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <AppBar style={{ paddingTop: 20 }} />
        <MaterialUiForm />
        <AppTable />
      </div>
    </MuiThemeProvider>
  </Provider>
);
