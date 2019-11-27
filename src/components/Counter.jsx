import React, { Component } from "react";
class Counter extends Component {
  state = {};
  render() {
    return <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="" class="navbar-brand">Counter</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#dropdown">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="dropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="" class="nav-link">menu 1</a>
                    </li>

                    <li class="nav-item">
                        <a href="" class="nav-link">menu 1</a>
                    </li>

                    <li class="nav-item">
                        <a href="" class="nav-link">menu 1</a>
                    </li>

                    <li class="nav-item">
                        <a href="" class="nav-link">menu 1</a>
                    </li>

                    <li class="nav-item">
                        <a href="" class="nav-link">menu 1</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>;
  }
}

export default Counter;
