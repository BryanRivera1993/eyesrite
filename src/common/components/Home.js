import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

  			<div className="post banner">
			    <h1 className="post-title">If you're' <em>looking</em>for <em>quality</em><em>care</em> with a <em>personal</em> <em>touch</em>, give us a <em>call</em><em>today</em>.</h1>
          <p>We are pleased to welcome you to our office in Kent, Wa, servicing <br /><em>Kent Valley</em> area, <em>Auburn</em>, and north <em>Seattle</em> areas. <a href="#" onClick={this.eventToggleSidebar}> Find out More</a></p>

			</div>

		  	<div className="post clearfix">

				<h2>What We Offer:</h2>

				<div className="skill-item clearfix">
					<h4>Services Provided</h4>
					<ul className="">
						<li><em><b>*</b>Comprehensive Vision & Eye Health Exams</em></li>
            <li><em><b>*</b>Treatment of Eye Infections & Injuries</em></li>
            <li><em><b>*</b>Contact Lens Exams & In-Stock Contacts</em></li>
						<li><em><b>*</b>Hundreds of Frames</em>
							<ul>
								<li><em><b>*</b>From Budget-Conscious To Designer And Sunglasses Too</em></li>
							</ul>
						</li>
            <li><em><b>*</b>Whole-Eye Health Management Using State-Of-The-Art Imaging Instruments Such as The Retinal Thickness Analyzer</em>
							<ul>
								<li><em><b>*</b>North, Humphrey Visual Fields, Retinal Camera</em></li>
							</ul>
						</li>
						<li><em><b>*</b>Cooperation With Your Primary Care Physician in Developing Management Schedules</em>
            <ul>
              <li><em><b>*</b>For Diabetes, Hypertension & Other Systemic-Related Ocular Changes</em></li>
            </ul>
            </li>
            <li><em><b>*</b>Corneal Reflective Therapy(TM)-Non-Surgical Alternative to LASIK</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Types of Payment Accepted</h4>
					<ul>
						<li><em><b>*</b>Computerized Exams </em></li>
            <li><em><b>*</b>State-of-the-Art Glaucoma and Diabetic Retinopathy Detection </em></li>
            <li><em><b>*</b>Corneal Mapping </em></li>
            <li><em><b>*</b>CAD-Designed Custom Contact Lenses </em></li>
            <li><em><b>*</b>On-Site Lab For Quick Turnaround of Spectacle Eyewear </em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Insurance Accepted</h4>
					<ul>
						<li><em><b>*</b>Regence Blue Cross Blue Shield</em></li>
						<li><em><b>*</b>Uniform</em></li>
						<li><em><b>*</b>Northwest Benefits Network</em></li>
						<li><em><b>*</b>Aetna</em></li>
            <li><em><b>*</b>L&I</em></li>
            <li><em><b>*</b>DSHS</em></li>
            <li><em><b>*</b>Medicare</em></li>
            <li><em><b>*</b>Medicaid</em></li>
            <li><em><b>*</b>Call to inquire about other insurances accepted</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Types of Payment Accepted</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Cash</em></li>
						<li><em><b>*</b>Personal Checks</em></li>
            <li><em><b>*</b>ATM</em></li>
						<li><em><b>*</b>American Express®</em></li>
            <li><em><b>*</b>MasterCard®</em></li>
						<li><em><b>*</b>Visa®</em></li>
            <li><em><b>*</b>Discover®</em></li>
						<li><em><b>*</b>Care Credit Payment Plans</em></li>
					</ul>
				</div>



  			</div>




			<Banner />

  		</div>

    );
  }
}

export default Home;
