import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      quote: "",
      author: ""
    };
    this.END_POINT =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    this.handleClick = this.handleClick.bind(this);
    this.shareOnTwitter = this.shareOnTwitter.bind(this);
  }

  componentDidMount() {
    fetch(this.END_POINT)
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

  shareOnTwitter = (text, url) => {
    window.open(
      "http://twitter.com/share?url=" +
        encodeURIComponent(url) +
        "&text=" +
        encodeURIComponent(text),
      "",
      "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
    );
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
            <br />
            <a
              href="twitter.com/intent/tweet"
              target="_blank"
              className="btn btn-primary"
              id="tweet-quote"
              // onClick={this.shareOnTwitter}
            >
              Tweet Quote
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
