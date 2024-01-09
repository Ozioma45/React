import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function ({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}
