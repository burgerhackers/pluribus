import React from 'react';
import ReactDOM from 'react-dom';

// webpack compilation imports
// import ACTIONS from './ACTIONS'
// import REDUCERS from './REDUCERS'
// import STORE from './STORE'

// custom components
import GoogleMap from './components/Map/Map.jsx';
import Feed from './components/Feed/Feed.jsx';
import NavBar from './components/Navbar/Navbar.jsx';
import Search from './components/Feed/Search/Search.jsx';

// material injection
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';

let messages = ["Trump trumps life", "Bernie Sanders > Super PACs", "Clinton","Where's Rubio?","Tom Cruise should run"];

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Feed messages={ this.props.messages } />
        <GoogleMap />
      </div>
    )
  }
}

ReactDOM.render(<Main messages={messages} />, document.getElementById('main'));
