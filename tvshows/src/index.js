import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShowsState from './Contexts/shows/showsState'
import './index.css'

ReactDOM.render(
  <ShowsState>
      <App />
  </ShowsState>,
  document.getElementById('root')
);

