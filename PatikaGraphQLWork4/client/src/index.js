import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloProvider,useQuery,gql} from "@apollo/client";
import client from './GraphQl/apolloClient';
import 'antd/dist/antd.css'

ReactDOM.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
  document.getElementById('root')
);

