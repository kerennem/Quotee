import React from 'react';
import {useParams, Link} from 'react-router-dom'
import { withRouter } from "react-router";
import {setChildQuote, setChild, getChildQuotes, deleteQuote} from '../dataApi.js'


// function Child() {
//   const { childId } = useParams();
//   return (
//     <div>{childId}'s page</div>
//   )
// }



class Child extends React.Component{

  constructor(props) {
    super(props);
    this.state = {   
      newQuoteText: ''  
    };
  }

  render() {
    const childName = this.props.match.params.childId;
    {/* TODO I want this by date (newest up). This assumes the quotes are sorted at the list: */}
    let lastQoutes = getChildQuotes(childName).slice(0, 3);

  return <div>
  <h1>{childName}</h1>
  <h4>add a new quote:</h4>
  <input onChange={event => this.setState({newQuoteText: event.target.value})} value={this.state.newQuoteText}/>
  <button onClick={() => {setChildQuote(childName, this.state.newQuoteText, "some date"); window.location.reload()}}>save</button>
  <h4>latest quotes:</h4>
  {
    lastQoutes.map(currQuote => 
      <div>
        <h6>{currQuote.date}</h6>
        <div>{currQuote.text}</div>
        <Link to={`/edit/${currQuote.id}`}>
          <button>edit</button>
        </Link>
        <button onClick={() => {deleteQuote(currQuote); window.location.reload()}}>delete</button>
      </div>
    )
  }
  {/* TODO does nothing for now: */}
  <button>more quotes</button>
  <Link to="/">
    <button>back</button>
  </Link>

  </div>
  }
}

export default withRouter(Child);
