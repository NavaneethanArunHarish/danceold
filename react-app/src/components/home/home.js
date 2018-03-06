import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
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

import axios from 'axios';



class Home extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillMount() {
    }

    trainerModule() {
        browserHistory.push('/login')
    }

    studentModule() {
        browserHistory.push('/student')
    }

    render() {
        return (
            <div>
                <HomeHeader />
                <Navigation />
                <Carousals />
                <CardBlock />
                <PanelBlock />
                <FeedBack />
               <Activity />
                {/* <Paperr /> */}
                
                <Footer />

            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);