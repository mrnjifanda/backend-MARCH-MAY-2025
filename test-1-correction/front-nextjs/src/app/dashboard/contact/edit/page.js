
export default function EditContact() {
    return (
        <main>
            <h1>Edit Contact</h1>
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
                    <button type="submit">Save</button>
                </div>
            </form>
        </main>
    );
}
