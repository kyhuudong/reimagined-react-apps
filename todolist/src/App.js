import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState, useCallback, useEffect } from "react";
import { v4 } from "uuid"

const STORE_TODO = "TODOS"


function App() {
  const [textInput, setTextInput] = useState("")
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const todos = localStorage.getItem(STORE_TODO)
    if (todos)
      setTodoList(JSON.parse(todos))
  }, [])

  useEffect(() => {
    localStorage.setItem(STORE_TODO, JSON.stringify(todoList))
  }, [todoList])

  const textInputOnChange = useCallback((e) => {
    setTextInput(e.target.value)
  }, [])

  const addTodoBtn = useCallback((e) => {
    setTodoList([{ id: v4(), name: textInput, isCompleted: false }, ...todoList])
    setTextInput("")
  }, [textInput, todoList])

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) => todo.id === id ? { ...todo, isCompleted: true } : todo)
    )
  }, [])

  return (
    <>
      <h3>To do list</h3>
      <TextField
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={addTodoBtn}
          >Add</Button>}
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={textInputOnChange}
      ></TextField>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
