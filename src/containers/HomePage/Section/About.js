import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";

class About extends Component {
  render() {
    return (
      <div className=" section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về Channel Hảnh cắt moi
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/bTRclzlG9dE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>ufkjhgfhgchcbvchghgjfhfhfhgfhgfhgf</p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
