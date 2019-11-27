import React, { Component } from "react";

class Cal extends Component {
  state = {
    count: 0
  };
  render() {

    let classes = "badge m-2"

    if(this.state.count == 0){
        classes = classes + "badge-warning";
    }

    return (
      <div className="p-auto">
        <span className={classes}>{this.state.count}</span>
        <button className="btn bg-success">Increment</button>
      </div>
    );
  }
}


export default Cal;
