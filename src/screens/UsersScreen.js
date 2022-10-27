import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { MoreHorizontal } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../usersSlice";
import UserScreen from "./UserScreen";

function UsersScreen() {
  const fetchedUsers = useSelector((state) => state.users.content);
  const isLoadingUsers = useSelector((state) => state.users.loadingUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoadingUsers) {
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
          {fetchedUsers.map((user, index) => {
            return (
              <tr>
                <td>{user["id"]}</td>
                <td>{user["name"]}</td>
                <td>{user["username"]}</td>
                <td>{user["email"]}</td>
                <td>
                  <Link to={"/users/" + user["id"]} element={<UserScreen />}>
                    <MoreHorizontal />
                  </Link>
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
