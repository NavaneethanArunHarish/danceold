import React from 'react';
import { browserHistory } from 'react-router';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
  } from 'material-ui/Stepper';
  import Paper from 'material-ui/Paper';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';
//   import avatar from '../asset/img/carousal3.jpg;';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import carousal1 from '../asset/img/carousal1.jpg';
  
  

  const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

export class Paperr extends React.Component {
    state = {
      };
    
    
    render() {
    
        return (
            <MuiThemeProvider>
            <div>
            <Paper style={style} zDepth={5} circle={true} />
            <Paper style={style} zDepth={5} circle={true} />
            <Paper style={style} zDepth={5} circle={true} />
   
    <Paper style={style}>
     
    <img src={carousal1}/>
    </Paper>
  </div>
  </MuiThemeProvider>
      
        );

    }
}