import styles from "./TodoItem.module.css";

export default function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}{" "}
        <span>
          <button className={styles.deleteBtn}>X</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
