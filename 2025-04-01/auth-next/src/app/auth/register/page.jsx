"use client"

import { register } from "@/app/services/auth.service";
import { redirect } from "next/navigation";
import React from "react"

export default function Register() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        confirm_password: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onSubmit = async (e) => {
        try {
            const result = await register(formData.email, formData.password, formData.fullName, formData.confirm_password);
            if (!result.error) {
                return redirect('/login');
            } else {
                alert("Error in form")
            }
        } catch (error) {
            alert("Error in form");
        }
    }

    return
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="FullName"
                onChange={onChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
            />
            <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={onChange}
            />
                        <input
                type="text"
                name="confirm_password"
                placeholder="Password"
                onChange={onChange}
            />
            <button type="submit">Login</button>
        </form>
}