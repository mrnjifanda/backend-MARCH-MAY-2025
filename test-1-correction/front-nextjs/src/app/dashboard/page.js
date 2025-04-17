"use client"

import { getAllContact } from "@/services/contact.service";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {

        getAllContact().then(response => {
            if (!response.error) {
                setContacts(response.data);
            } else {
                alert(response.message);
            }
        })
    }, []);

    return (
        <main>
            <h1>Dashboard</h1>
            <div>
                <a href="/dashboard/contact/add">New Contact</a>
                <a href="/dashboard/user">New user</a>
            </div>

            <h2>Contacts list</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Add by</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact._id}>
                            <td>1</td>
                            <td>{contact.fullName}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.addedBy.firstName + ' ' + contact.addedBy.lastName}</td>
                            <td>
                                <a href="/dashboard/contact/edit">Edit</a> |
                                <a href="/dashboard/contact/delete">Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
