import React from "react";
import css from "./Contact.module.css";

export default function Contact({ name, number }) {
    return (
        <li className={css.liItem}>
            <p>Name: {name}</p>
            <p> Number: {number}</p>
        </li>
    );
}
