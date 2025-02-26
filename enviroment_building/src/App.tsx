import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { text } from 'stream/consumers';

function App() {
  // コンポーネントに記述することで、直接コードを記述するよりも
  // 運用メンテナンスしやすくなる
  const[ todos, setTodos ] = useState(["todo1","todo2"]);
  //useState
  //変数を管理、監視するためにある
  return (
    <div className="App">
      <TodoList todos={todos}/>
      <input type = "text">
      </input>
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
  //input属性　入力フォーム
}

export default App;
