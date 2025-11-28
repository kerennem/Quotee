import React from 'react';
import {useParams, Link} from 'react-router-dom'
import {setChild} from '../dataApi.js'


class ManageKids extends React.Component{

  constructor(props) {
    super(props);
    this.state = {   
      newChildName: ''  
    };
  }

  render() {
  return <div>
  <input onChange={event => this.setState({newChildName: event.target.value})} value={this.state.newChildName}/>
  <button onClick={() => setChild(this.state.newChildName)}>save</button>
  <Link to="/">
    <button>back</button>
  </Link>
  </div>
  }
}

export default ManageKids;

