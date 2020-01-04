import React from 'react';
import './App.css';
// import ItemsTableHooks from './components/ItemsTableHooks';
import CardDetailsHooks from './components/CardDetailsHooks';

function App() {
  return (
    <div>
      <header className="App">
        <h1>Все предложения</h1>
      </header>
      {/* <ItemsTableHooks/> */}
      <CardDetailsHooks />
      <footer className='App'>
        <p>Тестовое задание в Авито Недвижимость</p>
      </footer>
    </div>
  );
}

export default App;
