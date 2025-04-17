"use client"

import { useState } from "react";
import { createUser } from "@/services/user.service";
import { redirect } from "next/navigation";

export default function AddUser() {

    const [userForm, setUserForm] = useState({
        firstName: '',
        lastName: '',
        category: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await createUser(userForm);
        if (response.error) {
            alert(response.message);
        } else {
            redirect('/dashboard');
        }
    };

    return (
        <main>
            <h1>Add User</h1>
            <form onSubmit={onSubmit} method="POST">
                <input
                    type="text"
                    name="firstName"
                    placeholder="Your first name"
                    onChange={onChange}
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Your last name"
                    onChange={onChange}
                />

                <select name="category" onChange={onChange}>
                    <option>Category</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>

                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </main>
    );
}
