import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';

const Home = (props) => {
     console.log(props);
     return(
          <>
          <BrowserRouter>
          <div>
          <Switch>
               <Route exact path='/' component={App} />
               <Route exact path='/hero' children={Hero} />
          </Switch>
          </div>
         
          </BrowserRouter>
          </>
     )
}

ReactDOM.render(
     <Home />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
