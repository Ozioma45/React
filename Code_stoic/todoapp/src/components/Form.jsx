import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <div className={styles.inputCont}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          className={styles.modernInput}
          placeholder="Enter Todo Item"
        />
        <button className={styles.modernBtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
