import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function Home({kids}) {
  return (
      <Container isLogged={true}>
          <div>settings</div>
          <div>My kid quotes</div>
          {
              kids.map(kid => 
              <Link to={`/child/${kid.name}`}>{kid.name}<br/></Link>
              
              )
          }
      </Container>
  )
}

const Container = styled.div`
  background-color: ${props => props.isLogged ? 'red' : 'blue'};
`

export default Home;

// ___________________________________________________________________


// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>

//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/zillow-group">Zillow Group</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/modus-create">Modus Create</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/:id" children={<Child />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }
