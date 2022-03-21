import React, { useState } from 'react';
import BookList from './components/BookList';
import Header from './components/header';
import { Context } from './components/context';

//import TodoList from './components/TodoList';

function App() {
  const [counter, setCount] = useState(1)
  const [sort, setSort] = useState(0)
  const value = {
    counter,
    setCount,
    sort,
    setSort
  };

  return (
    <Context.Provider value={value}>
      <Header />
      <BookList />
    </Context.Provider>
  );
}

export default App;
