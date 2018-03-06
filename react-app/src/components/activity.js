import React from 'react';
import { browserHistory } from 'react-router';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';


export class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
          <div>
          <div className="container mt-6">
    <h2 className="text-center color-primary mb-4">Our Latest Works</h2>
    <div className="owl-dots"></div>
    <div className="owl-carousel owl-theme">
        <div className="card animation-delay-6">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port4.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="color-primary">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-primary btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card card-dark-inverse animation-delay-8">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port24.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-info btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card animation-delay-10">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port7.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="color-primary">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-primary btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card animation-delay-6">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port8.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="color-primary">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-primary btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card card-dark-inverse animation-delay-8">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port9.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-info btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card animation-delay-10">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port5.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="color-primary">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-primary btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card animation-delay-6">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port11.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="color-primary">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-primary btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card card-dark-inverse animation-delay-8">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port3.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-info btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
        <div className="card animation-delay-10">
            <div className="withripple zoom-img">
                <a href="javascript:void()"><img src="<%= assets %>/img/demo/port14.jpg" alt="..." className="img-responsive"/></a>
            </div>
            <div className="card-block">
                <h3 className="color-primary">Thumbnail label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repellat, vitae porro ex expedita cumque nulla.</p>
                <p className="text-right">
                    <a href="javascript:void()" className="btn btn-primary btn-raised text-right" role="button"><i className="zmdi zmdi-collection-image-o"></i> View More</a>
                </p>
            </div>
        </div>
    </div>
</div>


</div>
        
        );
    }
}

