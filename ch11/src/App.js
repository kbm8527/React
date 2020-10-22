import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

/**
 * 날짜 : 2020/10/22
 * 이름 : 김보미
 * 내용 : 리액트 HTTP 통신
 *
 * axios
 *  - 리액트에서 가장 많이 사용하는 타입스크립트 HTTP 클라이언트 라이브러리
 *  - API서버
 *  - npm install axios 설치
 *
 */

function App() {
  // 상태값 생성
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState([]);

  const onClicked1 = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/todos/3"
    );
    setTodo(response.data);
  };
  const onClicked2 = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/todos"
    );
    setTodos(response.data);
  };

  return (
    <div>
      <h3>ch11. 리액트 HTTP 통신</h3>
      <h4>데이터 요청하기 1</h4>
      <button onClick={onClicked1}>데이터 요청</button>
      <p>
        userId : {todo && todo.userId} <br />
        id : {todo && todo.id} <br />
        title : {todo && todo.title} <br />
        completed : {todo && todo.completed.toString()} <br />
      </p>

      <h4>데이터 요청하기 2</h4>
      <button onClick={onClicked2}>데이터 요청</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.id} : {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
