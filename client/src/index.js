import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';


import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
  cache: new InMemoryCache(),

});

root.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    </Router>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <ApolloProvider client={client}>
//         <App />
//       </ApolloProvider>,
//     </Router>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );
