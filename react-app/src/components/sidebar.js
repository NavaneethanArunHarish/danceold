import React from 'react';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/sidebar.css';
import '../asset/css/style.light-blue-500.min.css';
import dance from '../asset/img/dance.svg';
import business from '../asset/img/business.svg';
import asset from '../asset/img/asset.svg';
import event from '../asset/img/events.svg';
import emng from '../asset/img/emanage.svg';
import trainer from '../asset/img/users.svg';

export class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        }
    }

    render() {
        return (
            <div className="left">

                <div className="item-3 active">
                    <a style={{ color: '#4169e1' }} href="/rolemanager">
                    <span><img className="glyphicon" src={trainer} /> Role management </span>                        
                    </a>
                </div>


                <div className="item active">
                 <span><img className="glyphicon" src={business} /> Business </span> 
                 <div className="sub-menu">
                    <a href="/business">
                        <div className="sub-menu-align">
                            <div className="glyphicon glyphicon-plus">
                                <span className="sub-menu-text-align">Create</span>
                            </div>
                        </div>
                    </a>
                    {/* <a href="/ListOfBusiness">
                        <div className="sub-menu-align">
                            <div className="glyphicon glyphicon-th-list">
                                <span className="sub-menu-text-align">Show All</span>
                            </div>
                        </div>
                    </a> */}
                    </div>
                </div>
                <div className="item-1 active">
                <span><img className="glyphicon" src={asset} /> Assets </span>
                <div className="sub-menu">
                    <a href="/createassest">
                        <div className="sub-menu-align">
                            <div className="glyphicon glyphicon-plus">
                                <span className="sub-menu-text-align">Create Asset</span>
                            </div>
                        </div>
                    </a>
                    <a href="/ListOfAssets">
                        <div className="sub-menu-align">
                            <div className="glyphicon glyphicon-th-list">
                                <span className="sub-menu-text-align">List of Asset</span>
                            </div>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="item-1 active">
                <span><img className="glyphicon" src={dance} /> Dance </span>
                <div className="sub-menu">
                    <a href="/createDance">
                        <div className="sub-menu-align">
                            <div className="glyphicon glyphicon-plus">
                                <span className="sub-menu-text-align">Create Dance</span>
                            </div>
                        </div>
                    </a>
                    <a href="/ListOfDance">
                        <div className="sub-menu-align">
                            <div className="glyphicon glyphicon-th-list">
                                <span className="sub-menu-text-align">List of Dance</span>
                            </div>
                        </div>
                    </a>
                    </div>
                </div>

                {/* <div className="item-2 active">
                <span><img className="glyphicon" src={event} /> Events </span>
                <div className="sub-menu">
                    <a href="/createevent">
                        <div className="sub-menu-align">
                            <div className="glyphicon glyphicon-plus">
                                <span className="sub-menu-text-align">Create</span>
                            </div>
                        </div>
                    </a>
                    </div>
                </div> */}
                {/* <div className="item-2 active">
                <span><img className="glyphicon" src={trainer} /> Trainers </span>
                <div className="sub-menu">
                    <a href="/trainerlist">
                        <div className="sub-menu-align">
                            <div className="glyphicon glyphicon-th-list">
                                <span className="sub-menu-text-align">List of Trainers</span>
                            </div>
                        </div>
                    </a>
                    </div>
                </div> */}

                <div className="item-3 active">
                    <a style={{ color: '#4169e1' }} href="/ListOfBusiness">
                    <span><img className="glyphicon" src={emng} /> Event management </span>                        
                    </a>
                </div>

                
            </div>
        );
    }
}