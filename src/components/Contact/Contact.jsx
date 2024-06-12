import css from './Contact.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, onDelete }) => {
    return (
        <div className={css.contactContainer}>
            <div className={css.personalData}>
                <p><IoPerson className={css.contactIcon} /> {contact.name}</p>
                <p><FaPhone className={css.contactIcon} /> {contact.number}</p>
            </div>
            <button className={css.deleteButton} type="button" onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
};

export default Contact;