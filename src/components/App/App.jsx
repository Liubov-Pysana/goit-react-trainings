import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import React, { useState, useEffect } from "react";
import css from "./App.module.css";

const App = () => {
    const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem("contacts");
        return storedContacts ? JSON.parse(storedContacts) : [];
    });

    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("Loaded contacts from local storage:", contacts);
    }, []);

    useEffect(() => {
        console.log("Saving contacts to local storage:", contacts);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const handleSearchChange = (evt) => {
        setSearch(evt.target.value);
    };

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox inputValue={search} handleChange={handleSearchChange} />
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
    );
};

export default App;
