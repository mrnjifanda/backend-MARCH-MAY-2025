"use client"

import { createContact } from "@/services/contact.service";
import { getAllUser } from "@/services/user.service";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddContact() {

    const [users, setUsers] = useState([]);
    const [conactForm, setContactForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        addedBy: ''
    });

    useEffect(() => {
        getAllUser().then(response => {
            if (response.error) {
                alert(response.message);
            } else {
                setUsers(response.data);
            }
        });
    }, []);

    const onChange = (e) => {
        const { name, value } = e.target;
        setContactForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        createContact
        const response = await createContact(conactForm);
        if (response.error) {
            alert(response.message);
        } else {
            redirect('/dashboard');
        }
    };

    return (
        <main>
            <h1>Add Contact</h1>
            <form onSubmit={onSubmit} method="POST">
                <input 
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    onChange={onChange}
                />
                <div>
                    <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        onChange={onChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={onChange}
                    />
                </div>
                <select
                    name="addedBy"
                    onChange={onChange}
                >
                    <option>Added by</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.firstName + ' ' + user.lastName}</option>
                    ))}
                </select>

                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </main>
    );
}
