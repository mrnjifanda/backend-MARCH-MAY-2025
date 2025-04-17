"use client";

import { useState } from "react"; // Importer useState
import { login } from "@/app/services/auth.service";
import { redirect } from "next/navigation";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData.email, formData.password);
            if (!result.error) {
                return redirect('/dashboard');
            } else {
                alert("Error in form");
            }
        } catch (error) {
            alert("Error in form");
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={onChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={onChange}
            />
            <button type="submit">Login</button>
        </form>
    );
}
