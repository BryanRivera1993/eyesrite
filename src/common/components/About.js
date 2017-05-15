import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		<Banner />

      	  <div className="about">

      	  	<h3>Dr. E Larry Jones</h3>

      	  	<img />

	      </div>

	      <div className="repos">
        <h3>About Me</h3>

        <p>Dr. Jones hails from Seattle, Washington. He is a graduate of the University of Washington where he played football for the Huskies. Dr. Jones also taught Black history with his father Dr. Edward L. Jones.</p>

        <p>He is currently on the board and West Coast Trustee for the National Optometric Physicians Assoiation and a member of AOA and the Washington Optometric Physicians Association. Dr. Jones attended optometry school at Pacific University. He has been in practice for over 30 years. He enjoys working with people of all ages.</p>
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;
