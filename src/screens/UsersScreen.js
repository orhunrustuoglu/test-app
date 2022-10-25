import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { MoreHorizontal } from "react-feather";
import { Link, Routes } from "react-router-dom";
import UserScreen from "./UserScreen";

function UsersScreen() {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  // const [selectedUser, setSelectedUser] = useState(0);

  useEffect(() => {
    //todo fetch data with props later
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        setUsers(data);
        //console.log(users.find((user) => (user.id = 1)));
      });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Loading...</h1>;
      </div>
    );
  }

  // if (selectedUser !== 0) return;
  // <UserScreen props={users[selectedUser]} />;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Table responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{user["id"]}</td>
                <td>{user["name"]}</td>
                <td>{user["username"]}</td>
                <td>{user["email"]}</td>
                <td>
                  <Link
                    to={"/users/" + user["id"]}
                    element={<UserScreen props={users} />}
                  >
                    <MoreHorizontal />
                  </Link>
                  {/* <UserScreen props={users} /> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersScreen;
