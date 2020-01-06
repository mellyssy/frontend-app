import React from 'react';
import './App.css';
import ItemsTable from './components/ItemsTable';
import CardDetails from './components/CardDetails';

function App() {

  const getCardId = (id) => {
    console.log(id)
  }

  return (
    <div>
      <header className="App">
        <h1>Все предложения</h1>
      </header>
      <ItemsTable getCardId={getCardId} />
      <footer className='App'>
        <p>Тестовое задание в Авито Недвижимость</p>
      </footer>
    </div>
  );
}

export default App;
