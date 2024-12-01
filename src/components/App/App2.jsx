import TaskList from "../TaskList/TaskList";
import initialTasks from "../../tasks.json";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import css from "./App.module.css";
import { useState } from "react";

import ContactList from "../ContactList/ContactList";
import initialContacts from "../../contacts.json";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
