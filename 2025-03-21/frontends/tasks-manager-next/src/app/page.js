import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  
  const [ contacts, setContacts] = useState([]);

  const baseUrl = "http://localhost:3000";

  async function getAllContacts() {
    try {

      const request = await fetch(`${baseUrl}/lists`, {
        method: 'GET'
      });

      if (request.ok) {

        const response = await request.json();
        setContacts(response.data);
      }
    } catch (error) {
      alert('Error:', error.message)
    }
  }

  async function createContact(contact) {
    try {

      const request = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        body: JSON.stringify(contact)
      });

      if (request.ok) {

        const response = await request.json();
        alert(response.message);
      }
    } catch (error) {
      alert('Error:', error.message)
    }
  }

  return (
    <div className={styles.page}>

    </div>
  );
}
