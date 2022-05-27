import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; Lê Hải Anh - More infomation, please visit my github
          <a href="https://www.youtube.com/watch?v=bTRclzlG9dE" target="blank">
            {" "}
            &#8594; Click here &#8592;
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    //inject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
