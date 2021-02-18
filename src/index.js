import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query'
//import { ReactQueryDevtools } from 'react-query-devtools'
  

// Create a client
 const queryClient = new QueryClient()

ReactDOM.render(
   // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <App />

  </QueryClientProvider>,
  document.getElementById('root')
);


