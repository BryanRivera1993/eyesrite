import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>Kent</h3>

      	  	<p>Eyes Rite Optical & Hearing Center <br />603 W Gowe St. <br />Kent, Wa 98032 <br />ph: 253-854-2028
      	  	</p>

      	  	<img className="kent" />

	      </div>

	      <div className="services">

      	  	<h3>Renton</h3>

      	  	<p>Sam’s Club Optical <br />901 S. Grady Way <br />Renton, Wa 98055 <br />ph: 425-793-7946
      	  	</p>

      	  	<img className="renton" />

	      </div>

      </div>
    );
  }
}

export default Services;
