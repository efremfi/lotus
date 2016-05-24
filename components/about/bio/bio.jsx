import React from 'react';
import './bio.scss';

const Bio = () => {
  return (
    <div className="row">
      <div className="col s12">
        <img className="profile-pic" src="../assets/images/about/frederick-mfinanga.jpg"/>
      </div>
      <div className="col s12">
        <div className="row">
          <div className="col m4 push-m4 s12 profile-title">
            <h5>FREDERICK MFINANGA</h5>
            <h6><i>A software developer based in Montreal, who loves art & design</i></h6>
          </div>
        </div>
        <div className="row">
          <div className="col m6 offset-m3 s12">
            <p className="profile-details">
              Frederick is an advocate for good design with an eye for details. He enjoys getting his hands dirty with front end
              technologies, creating beautiful experiences online, and reading books on human psychology, design & business.
              When Frederick is not punching out code, he is out taking photos of beautiful models, playing basketball,
              exercising, meditating or out and about travelling to exotic places,
              socializing and building communities.
            </p>
            <a className="waves-effect waves-light btn-large green lighten-1 contact-btn" href="#/contact">GET IN TOUCH</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
