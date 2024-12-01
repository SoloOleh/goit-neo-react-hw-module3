import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <span className={css.icon}>👤</span>
          {name}
        </p>
        <p className={css.number}>
          <span className={css.icon}>📞</span>
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
