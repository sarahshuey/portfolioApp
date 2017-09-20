import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    // INLINE STYLING
    let otherStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }
    let aboutStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">
              Home
            </h2>
            <hr/>
            <p className="primary-text">
              Welcome to my Home Page
            </p>
          </article>
        </section>
        <section className="row" style= {otherStyle}>
          <article className="col-lg-5">
            <h2 className="headings">
              My home page
            </h2>
            <hr/>
            <p className="primary-text">This is the end of my home page</p>
          </article>
        </section>
      </div>
    );
  }
}
