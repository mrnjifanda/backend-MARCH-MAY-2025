"use client"

import { createContact, getOneContact } from "@/services/contact.service";
import { getAllUser } from "@/services/user.service";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditContact() {

    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [users, setUsers] = useState([]);
    const [conactForm, setContactForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        addedBy: ''
    });

    useEffect(() => {

        getOneContact(id).then(response => {
            if (!response.error) {

                console.log(response);

                setContact(response.data);

                console.log(contact);


                getAllUser().then(user_response => {
                    if (user_response.error) {
                        alert(user_response.message);
                    } else {
                        setUsers(user_response.data);
                    }
                });
            } else {
                console.log(response);
                alert(response.message);
                redirect('/dashboard');
                
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

        const response = await createContact(conactForm);
        if (response.error) {
            alert(response.message);
        } else {
            redirect('/dashboard');
        }
    };

    return
        {contact ? (
            <main>
                <h1>Edit Contact</h1>
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
        ) : '' };
}
