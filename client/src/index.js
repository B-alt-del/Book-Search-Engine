import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { setContext } from '@apollo/client/link/context'; //added in test
import { BrowserRouter as Router} from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

//-------------------------testing-----------------
const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token =localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
//----------------old below--------------------------------

// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     })
//   },
//   uri: '/graphql',
//   cache: new InMemoryCache(), 
// });
////-------------------------------------------------------

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
