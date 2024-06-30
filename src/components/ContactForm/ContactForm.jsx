import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Must be at least 3 characters")
                .max(50, "Must be 50 characters or less")
                .required("Required"),
            number: Yup.string()
                .min(3, "Must be at least 3 characters")
                .max(50, "Must be 50 characters or less")
                .required("Required"),
        }),
        onSubmit: (values, { resetForm }) => {
            const newContact = { id: nanoid(), ...values };
            addContact(newContact);
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                // className={formik.touched.name && formik.errors.name ? styles.errorInput : ""}
            />
            {formik.touched.name && formik.errors.name ? <div className={css.error}>{formik.errors.name}</div> : null}

            <label htmlFor="number">Number</label>
            <input
                id="number"
                name="number"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                // className={formik.touched.number && formik.errors.number ? styles.errorInput : ""}
            />
            {formik.touched.number && formik.errors.number ? (
                <div className={css.error}>{formik.errors.number}</div>
            ) : null}

            <button type="submit" className={css.button}>
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;
