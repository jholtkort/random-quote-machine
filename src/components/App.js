import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    info: [],
    quote: "",
    author: ""
  };

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          info: data.quotes,
          quote: data.quotes[0].quote,
          author: data.quotes[0].author
        });
        // console.log(this.state.info);
        // console.log(this.state.quote);
        // console.log(this.state.author);
      });
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
