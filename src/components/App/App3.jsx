// import { useState, useEffect } from "react";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import css from "./App.module.css";

// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem("contacts");
//     return savedContacts ? JSON.parse(savedContacts) : initialContacts;
//   });
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (newContact) => {
//     setContacts((prev) => [...prev, newContact]);
//   };

//   const deleteContact = (id) => {
//     setContacts((prev) => prev.filter((contact) => contact.id !== id));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm onAddContact={addContact} />
//       <SearchBox value={filter} onChange={setFilter} />
//       <ContactList
//         contacts={filteredContacts}
//         onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// }

import { useState } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import initialContacts from "../../contacts.json";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2 className={css.subtitle}>Contacts</h2>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={css.filter}
      />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
