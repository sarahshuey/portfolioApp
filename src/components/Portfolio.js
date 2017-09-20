import React, { Component } from 'react';

export default class Portfolio extends Component {
  render(){
    let style = {
      "backgroundColor": "blue",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "50px"
    }
    let subHeadings = {
      "color": "#fff",
    }
    return(
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={style}>
        <div className="image">
          <img style={{width: 150, height: 150}} src={"src/images/download.jpg"}/>
          <img style={{width: 150, height: 150}} src={"src/images/image-slider2.jpg"}/>
          <img style={{width: 150, height: 150}} src={"src/images/images.jpg"}/>
          </div>
          <div className="col-lg-8 map">
            <h3 className="sub-headings" style={subHeadings}>Me</h3>
            <a href="/"><p className="primary-text">Sarah Shuey Austin Tx</p></a>
          </div>
    </section>
  </div>
    )
  }
}
