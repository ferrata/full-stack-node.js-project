import { useEffect, useState } from "react";
import { User } from "./User";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        const json = res.json();
        console.log(json);

        return json;
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      {users.map((user: any) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};
