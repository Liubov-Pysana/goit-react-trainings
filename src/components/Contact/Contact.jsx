import React from "react";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
    return (
        <li className={css.liItem}>
            <p>Name: {name}</p>
            <p> Number: {number}</p>
            <button className={css.deleteButton} onClick={() => onDelete(id)}>
                Delete
            </button>
        </li>
    );
}
