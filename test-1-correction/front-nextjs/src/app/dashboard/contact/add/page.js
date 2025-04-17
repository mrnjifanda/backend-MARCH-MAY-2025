
export default function AddContact() {
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
