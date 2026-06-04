import axios from "axios";
import { useEffect, useState } from "react";

function Show_User(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                "https://opulent-space-disco-q7rrqwj9vp9wfxgr6-5500.app.github.dev/users"
            );

            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Registered Users</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}



export default Show_User;