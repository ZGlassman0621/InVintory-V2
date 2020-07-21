// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function ViewWine(props) {
//   return (
//     <div>
//       <h3>{wine.name}</h3>
//       {props.wines.map(wine => (
//         <React.Fragment key={wine.id}>
//           <Link to={`/wines/${wine.id}`}><p>{wine.name}</p></Link>
//           <Link to={`/wines/${wine.id}/edit`}><button>Edit</button></Link>
//           <button onClick={() => props.handleWineDelete(wine.id)}>Delete</button>
//         </React.Fragment>
//       ))}
//       <br />
//       <Link to="/wines/new"><button>Create New Wine</button></Link>
//     </div>
//   )
// }


// // I want the wine name to display at the top of the screen with all information below. How would I do that?