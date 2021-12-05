import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";

class App extends Component {
  // apiKey = process.env.REACT_APP_API_KEY;
  apiKey = "32eacd9c319740e0a620ef9fe420f19c";
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
        color="#ff0000"
        height={4}
        progress={this.state.progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News apiKey={this.apiKey} setProgress ={this.setProgress} key="general" pageSize={10} country="us" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News apiKey={this.apiKey} setProgress ={this.setProgress} key="business" pageSize={10} country="us" category="business" />}
          />
          <Route
            exact
            path="/technology"
            element={<News apiKey={this.apiKey} setProgress ={this.setProgress} key="technology" pageSize={10} country="us" category="technology" />}
          />
          <Route
            exact
            path="/sports"
            element={<News apiKey={this.apiKey} setProgress ={this.setProgress} key="sports" pageSize={10} country="us" category="sports" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News apiKey={this.apiKey} setProgress ={this.setProgress} key="" pageSize={10} country="us" category="entertainment" />}
          />
          <Route
            exact
            path="/health"
            element={<News apiKey={this.apiKey} setProgress ={this.setProgress} key="" pageSize={10} country="us" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News apiKey={this.apiKey} setProgress ={this.setProgress} key="" pageSize={10} country="us" category="science" />}
          />
          <Route
            exact
            path="/general"
            element={<News apiKey={this.apiKey} setProgress ={this.setProgress} key="" pageSize={10} country="us" category="general" />}
          />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
