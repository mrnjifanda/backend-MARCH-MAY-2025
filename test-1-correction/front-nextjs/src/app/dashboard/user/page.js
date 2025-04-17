
export default function AddUser() {
    return (
        <main>
            <h1>Add User</h1>
            <form>
                <input type="text" placeholder="Your first name" />
                <input type="text" placeholder="Your last name" />
                <select>
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
