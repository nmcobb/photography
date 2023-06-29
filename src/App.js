import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import React, { Component } from "react";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

export default class App extends Component {
  state = {
  }

  componentDidMount() {
    fetch("catalog.json")
      .then((r) => r.json())
      .then((data) => this.setState({ data }))
  }

  render() {
    return (
      <div style={{}}>
        <Nav />
        {
          this.state.data ?
            <div>
                <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home data={this.state.data}/>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery data={this.state.data}/>} />
                </Routes>
              </BrowserRouter>
            </div>:
            <div> loading  </div>
        }
      </div>
    );
  }
}