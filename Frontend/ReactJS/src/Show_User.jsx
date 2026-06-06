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
                "https://model-1-1-6iur.onrender.com/users"
            );

            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="table-wrapper">
    <h2 className="User">Registered Users</h2>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>
            {users.map((user) => (
                <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                </tr>
            ))}
        </tbody>
    </table>
        </div>
    );
}



export default Show_User;