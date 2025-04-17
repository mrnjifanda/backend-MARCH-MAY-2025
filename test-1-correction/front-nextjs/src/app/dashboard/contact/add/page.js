"use client"

import { getAllUser } from "@/services/user.service";
import { useEffect, useState } from "react";

export default function AddContact() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUser().then(response => {
            if (response.error) {
                alert(response.message);
            } else {
                setUsers(response.data);
            }
        });
    }, []);

    return (
        <main>
            <h1>Add Contact</h1>
            <form>
                <input type="text" placeholder="Full Name" />
                <div>
                    <input type="text" placeholder="Phone" />
                    <input type="email" placeholder="Email" />
                </div>
                <select>
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
