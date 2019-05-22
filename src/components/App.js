import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    info: [],
    quote: "",
    author: ""
  };

  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(response => {
        this.setState({
          info: response.data.quotes,
          quote: response.data.quotes[0].quote,
          author: response.data.quotes[0].author
        });
      });
  }

  handleClick = event => {
    event.preventDefault();
    const quoteNum = Math.floor(Math.random() * this.state.info.length);

    const newQuote = this.state.info[quoteNum];

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    });
  };

  render() {
    const { author, quote } = this.state;

    return (
      <div className="container">
        <div className="card quote-box">
          <h1 className="title mt-3">Random Quote Machine</h1>
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
              Generate for New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
