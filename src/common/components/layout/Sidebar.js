import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

		  <div className="sidebar-item sidebar-footer">
		    <p>Ears That Hear and Eyes That See - The Lord Has Made Them Both. Proverbs 20:12</p>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/services" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Locations</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">

		    <p>
				<a href="http://www.natoptassoc.org/">Optometry Careers</a><br/>
				<a href="http://www.sozoglobal.com/docjones">Sozo</a><br/>
				<a href="https://www.newunivera.com/en-us/?register_sponsorid=1112196">Univera</a><br/>
		    </p>

		  </div>

		</div>
    );
  }
}

export default Sidebar;
