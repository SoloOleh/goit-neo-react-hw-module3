// import css from "./Contact.module.css";

// export default function Contact({ data: { id, name, number }, onDelete }) {
//   return (
//     <div className={css.container}>
//       <p className={css.text}>{name}</p>
//       <p className={css.text}>{number}</p>
//       <button className={css.btn} onClick={() => onDelete(id)}>
//         Delete
//       </button>
//     </div>
//   );
// }

// import css from "./Contact.module.css";

// export default function Contact({ data: { id, name, number }, onDelete }) {
//   return (
//     <div className={css.container}>
//       <p className={css.text}>
//         {name}: {number}
//       </p>
//       <button className={css.btn} onClick={() => onDelete(id)}>
//         Delete
//       </button>
//     </div>
//   );
// }

// import css from "./Contact.module.css";

// export default function Contact({ id, name, number, onDelete }) {
//   return (
//     <div className={css.container}>
//       <p className={css.text}>
//         {name}: {number}
//       </p>
//       <button className={css.button} onClick={() => onDelete(id)}>
//         Delete
//       </button>
//     </div>
//   );
// }

// import css from "./Contact.module.css";

// export default function Contact({ data: { id, name, number }, onDelete }) {
//   return (
//     <div className={css.contact}>
//       <p className={css.text}>
//         <span className={css.name}>{name}:</span> {number}
//       </p>
//       <button className={css.btn} onClick={() => onDelete(id)}>
//         Delete
//       </button>
//     </div>
//   );
// }

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
