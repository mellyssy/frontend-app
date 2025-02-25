import React from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';

import './App.css';

import ItemsTable from './components/ItemsTable';
import CardDetails from './components/CardDetails';

function App() {
  let { pathname } = useLocation();

  return (
      <div>
      <header className="App">
        <h1>Объявления</h1>
      </header>
        <Switch>
          <Route exact path='/' component={ItemsTable} />
          <Route path={`${pathname}`} component={CardDetails} />
        </Switch>  
      <footer className='App'>
        <Link to='/' className='link'>Вернуться к списку</Link>
      </footer>
    </div>
  );
}

export default App;
