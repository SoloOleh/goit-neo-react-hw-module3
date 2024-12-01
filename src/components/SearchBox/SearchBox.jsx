import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
