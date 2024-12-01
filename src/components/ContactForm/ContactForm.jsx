// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as yup from "yup";
// import { nanoid } from "nanoid";
// import css from "./ContactForm.module.css";

// const validationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .required("Name is required")
//     .min(3, "Minimum 3 characters")
//     .max(50, "Maximum 50 characters"),
//   number: yup
//     .string()
//     .required("Number is required")
//     .min(3, "Minimum 3 characters")
//     .max(50, "Maximum 50 characters"),
// });

// export default function ContactForm({ onAddContact }) {
//   const handleSubmit = (values, { resetForm }) => {
//     onAddContact({ id: nanoid(), ...values });
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ name: "", number: "" }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form className={css.form}>
//           <label className={css.label}>
//             Name
//             <Field className={css.field} type="text" name="name" />
//             <ErrorMessage className={css.error} name="name" component="div" />
//           </label>
//           <label className={css.label}>
//             Number
//             <Field className={css.field} type="text" name="number" />
//             <ErrorMessage className={css.error} name="number" component="div" />
//           </label>
//           <button className={css.button} type="submit">
//             Add contact
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: yup
    .string()
    .required("Number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
});

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>
          <label className={css.label}>
            Number
            <Field className={css.field} type="text" name="number" />
            <ErrorMessage className={css.error} name="number" component="div" />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
