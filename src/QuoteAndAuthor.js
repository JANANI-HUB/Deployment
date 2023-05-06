import React from "react";

class QuoteAndAuthor extends React.Component {
    
        
  render() {

    return (
        
      <div  className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button
        style={{ backgroundColor: "black" }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          Get A Quote
        </button>
      </div>
    );
    
  }
    
}

export default QuoteAndAuthor;