import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
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



class EventComponent extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
          assetid:'',
          host:'',
          description:'',
          host:'',
          status:'',
          event_date:'',
          event_type:'',
          title:'',
          category_id:'',
          location:''
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeEventDate = this.changeEventDate.bind(this);
        this.changeEventType = this.changeEventType.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeAssertId = this.changeAssertId.bind(this);
        this.changeCategoryId = this.changeCategoryId.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.changeHost = this.changeHost.bind(this);
        this.eventRegister = this.eventRegister.bind(this);
    }

    componentWillMount() {
      this.props.createAction.getEvent();
    }

    componentWillReceiveProps(nextProps) {
      //console.log("nextProps>>>>>>>>> ",JSON.stringify(nextProps));
    };
    
    changeAssertId = (event, index, value) => this.setState({assetid:value});

    changeCategoryId = (event, index, value) => this.setState({category_id:value});

    changeHost = (event, index, value) => this.setState({host:value});

    changeTitle(e) {
      this.setState({title:e.target.value});
    }

    changeEventDate = (event, date) => {
      this.setState({
        event_date: date,
      });
    };

    changeEventType(e) {
      this.setState({event_type:e.target.value});
    }

    changeStatus(e) {
      this.setState({status:e.target.value});
    }

    changeDescription(e) {
      this.setState({description:e.target.value});
    }

    changeLocation(e) {
      this.setState({location:e.target.value});
      //this.setState({assetid:"5a0b0435e510ee1fbc6c0f8b"});
      //this.setState({category_id:"5a0b0899e510ee1fbc6c0f92"});
      //this.setState({host:"5a0b09b2e510ee1fbc6c0f93"});
    }

    eventRegister() {
      this.props.createAction.addEvent(this.state);
    }


    render() {
        return (
          <div>
                <HomeHeader />
                <MuiThemeProvider>
                <Card>
                <center>
                            <CardTitle title="Event Registration" subtitle="Dance like you have never won!" />
                            <CardText>
                                <div className="form-horizontal" >
                                    <fieldset>
                                        <div className="form-group" >
                                        <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Enter Title"
                                                            floatingLabelText="Title"
                                                            onChange={this.changeTitle}
                                                            value={this.state.title}
                                                        />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <TextField
                                                            hintText="Enter Location"
                                                            floatingLabelText="Location"
                                                            onChange={this.changeLocation}
                                                            value={this.state.location}
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                        <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>
                                                        <TextField
                                                            hintText="Enter Event Type"
                                                            floatingLabelText="Event Type"
                                                            onChange={this.changeEventType}
                                                            value={this.state.event_type}
                                                        /><br />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <TextField
                                                            hintText="Enter Status"
                                                            floatingLabelText="Status"
                                                            onChange={this.changeStatus}
                                                            value={this.state.status}
                                                        /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                        <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>                                                        
                                                        <SelectField floatingLabelText="Assert Id"
                                                          hintText="Enter Assert Id"
                                                          onChange={this.changeAssertId}
                                                          value={this.state.assetid}
                                                        >
                                                        <MenuItem value={1} primaryText="Never" />
                                                        <MenuItem value={2} primaryText="Every Night" />
                                                        <MenuItem value={3} primaryText="Weeknights" />
                                                        <MenuItem value={4} primaryText="Weekends" />
                                                        <MenuItem value={5} primaryText="Weekly" />
                                                        </SelectField><br />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px" }}>
                                                        <SelectField floatingLabelText="Category Id"
                                                        hintText="Enter Category Id"
                                                        onChange={this.changeCategoryId}
                                                        value={this.state.category_id}
                                                      >
                                                          <MenuItem value={1} primaryText="Never" />
                                                          <MenuItem value={2} primaryText="Every Night" />
                                                          <MenuItem value={3} primaryText="Weeknights" />
                                                          <MenuItem value={4} primaryText="Weekends" />
                                                          <MenuItem value={5} primaryText="Weekly" />
                                                        </SelectField><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                        <div className="row">
                                                <div className='col-md-offset-4'>
                                                    <div className='col-md-3'>                                                        
                                                        <SelectField floatingLabelText="Host"
                                                          hintText="Enter Host"
                                                          onChange={this.changeHost}
                                                          value={this.state.host}
                                                        >
                                                          <MenuItem value={1} primaryText="Never" />
                                                          <MenuItem value={2} primaryText="Every Night" />
                                                          <MenuItem value={3} primaryText="Weeknights" />
                                                          <MenuItem value={4} primaryText="Weekends" />
                                                          <MenuItem value={5} primaryText="Weekly" />
                                                        </SelectField><br />
                                                    </div>
                                                    <div className='col-md-3' style={{ paddingLeft: "55px", paddingTop: "24px"}}>
                                                    <TextField
                                                    hintText="Enter Description"
                                                    multiLine={true}
                                                    rows={1}
                                                    rowsMax={4}
                                                    onChange={this.changeDescription}
                                                    value={this.state.description}
                                                  /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div className="row">
                                                <DatePicker hintText="Event Date" mode="landscape" onChange={this.changeEventDate}/>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <div style={{ marginLeft: "25%" }} className="col-md-6">
                                                <RaisedButton label="Register" primary={true} onClick={this.eventRegister}/>
                                                <RaisedButton label="Cancel" secondary={true}/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                </CardText>
                        </center>

                    </Card>
                </MuiThemeProvider>

                <Footer />

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
      createEvent: state.createEvent
    };
}

function mapDispatchToProps(dispatch) {
    return {
      createAction : bindActionCreators(createAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventComponent);