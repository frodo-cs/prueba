import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Books from './components/book/BookList';
import BookItem from './components/book/BookItem';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/books/:id' component={BookItem} exact />
      <Route path='/books?search=:text' component={Books} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();