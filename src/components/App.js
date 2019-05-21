import React, { Component } from "react";

import quotes from "../components/apis";
import "./App.css";

class App extends Component {
  state = {
    info: [],
    quote: "",
    author: ""
  };

  componentDidMount() {
    const response = quotes.get();

    console.log(response);
    // this.setState({
    //   info: response.quotes,
    //   quote: response.quotes[0].quote,
    //   author: response.quotes[0].author
    // });
    // console.log(this.state.info);
    // console.log(this.state.quote);
    // console.log(this.state.author);
  }

  handleClick = event => {
    event.preventDefault();
    const quoteNum = Math.floor(Math.random() * this.state.info.length);
    // console.log(quoteNum);

    const newQuote = this.state.info[quoteNum];
    // console.log(newQuote);

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    });
  };

  render() {
    const { author, quote } = this.state;

    return (
      <div className="container" id="quote-box">
        <div className="card">
          <div className="card-header">Random Quote Machine</div>
          <div className="card-body">
            <h5 className="card-title" id="text">
              {quote}
            </h5>
            <p className="card-text" id="author">
              -{author}
            </p>
            <button
              className="btn btn-primary"
              id="new-quote"
              onClick={this.handleClick}
            >
              Generate next quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
