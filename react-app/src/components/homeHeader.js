import React from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MapsPlace from 'material-ui/svg-icons/maps/place';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer'
    
  },
};

export class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <MuiThemeProvider>
        <div className="achu"   >
          <AppBar style={{backgroundColor:'lightslategray'}}
            title={<span style={styles.title}>
            <div className="ms-footbar-title">
            <span className="ms-logo ms-logo-white ms-logo-sm mr-1">KK</span>
            <h3 className="no-m ms-site-title">Dance
            <span>School</span>
            </h3>
          </div></span>}
            onTitleTouchTap={this.handleTouchTap}
            iconElementLeft={<IconButton></IconButton>}
            iconElementRight={<IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
            </IconMenu>}
          />
        </div>
      </MuiThemeProvider>

    );
  }
}