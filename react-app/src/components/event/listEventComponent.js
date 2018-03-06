import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import createAction from '../../actions/event';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import '../../asset/css/plugins.min.css';
import '../../asset/css/style.themed.css';
import '../../asset/css/preload.css';
import '../../asset/css/style.light-blue-500.min.css';
import '../../asset/css/ng2-select.css';
import { Footer } from '../footer';
import { HomeHeader } from '../homeHeader';
import { Navigation } from '../navigation';
import { CardBlock } from '../cardblock';
import { PanelBlock } from '../panelblock';
import { FeedBack } from '../feedback';
import { Activity } from '../activity';
import { Carousals } from '../carousal';
import { Paperr } from '../paper';



class ListEventComponent extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
          eventDetails:[]
        }
        this.isSelected = this.isSelected.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
    }

    componentWillMount() {
      this.props.createAction.getEvent();
    }

    componentWillReceiveProps(nextProps) {
      console.log(">>>>>>>>>>>>>>>"+JSON.stringify(nextProps.getEvent.result));
      this.setState({eventDetails:nextProps.getEvent.result});
    };

    isSelected = (index) => {
        //return this.state.selected.indexOf(index) !== -1;
    };
    
    handleRowSelection = (selectedRows) => {
        this.setState({
          selected: selectedRows,
        });
    };
    

    render() {
        console.log(">>>>>>>>>>>>>>>",JSON.stringify(this.state.eventDetails));
        return (
          <div>
              <MuiThemeProvider>
              <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Event date</TableHeaderColumn>
            <TableHeaderColumn>Event Type</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Location</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {this.state.eventDetails.map(( listValue, index ) => {
          return (
            <TableRow selected={this.isSelected(0)}>
            <TableRowColumn>{listValue.name}</TableRowColumn>
            <TableRowColumn>{listValue.event_date}</TableRowColumn>
            <TableRowColumn>{listValue.event_type}</TableRowColumn>
            <TableRowColumn>{listValue.status}</TableRowColumn>
            <TableRowColumn>{listValue.location}</TableRowColumn>
            <TableRowColumn>{listValue.description}</TableRowColumn>
          </TableRow>
           );
        })}
        </TableBody>
      </Table>
              </MuiThemeProvider>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
      createEvent: state.createEvent,
      getEvent: state.event.getEventSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
      createAction : bindActionCreators(createAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEventComponent);