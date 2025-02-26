import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  // コンポーネントに記述することで、直接コードを記述するよりも
  // 運用メンテナンスしやすくなる
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
