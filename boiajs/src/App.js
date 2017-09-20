import React from 'react';
import ReactDOM from 'react-dom';
import {red500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import BoiaAppBar from './AppBar';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    backgroundColor: red500,
  },
  appBar: {
    height: 50,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <BoiaAppBar />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
export default App;
