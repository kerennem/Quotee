import React from 'react';
import {useParams, Link} from 'react-router-dom';
import { withRouter } from "react-router";
import {updateQuoteText, getQuote} from '../dataApi.js'


class EditQuote extends React.Component{

  constructor(props) {
    super(props);
    this.state = {   
      newQuoteText: ''  
    };
  }

  render() {
  const currQuoteId = this.props.match.params.quoteId;
  const currQuote = getQuote(currQuoteId);

  return <div>
    <h4>edit the quote:</h4>  
    <input onChange={event => this.setState({newQuoteText: event.target.value})} defaultValue={currQuote.text}/>
    <button onClick={() => updateQuoteText(currQuoteId, this.state.newQuoteText)}>save</button>
    <Link to={`/child/${currQuoteId.slice(0, -1)}`}>
      <button>back</button>
    </Link>
  </div>
  }
}

export default withRouter(EditQuote);
