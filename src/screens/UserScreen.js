import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UserScreen() {
  const user = useSelector((state) => state.users.currentUser);
  console.log(user);

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/users/" + user.id + "/posts", { replace: true }),
    [navigate]
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="card text-center" style={{ width: 500 }}>
        <div className="card-header" style={{ fontWeight: "bold" }}>
          <h2>{user["name"]}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            <span style={{ fontWeight: "bold" }}>User Name: </span>
            {user["username"]}
          </p>
          <p className="card-text">
            <span style={{ fontWeight: "bold" }}>Email: </span>
            {user["email"]}
          </p>
          <p className="card-text">
            <span style={{ fontWeight: "bold" }}>Address: </span>
            <a>
              {" "}
              {user["address"]["street"]}, {user["address"]["suite"]},
              {user["address"]["city"]}, {user["address"]["zipcode"]},
              {user["address"]["geo"]["lat"]}/{user["address"]["geo"]["lng"]}
            </a>
          </p>
          <p className="card-text">
            <span style={{ fontWeight: "bold" }}>Phone: </span>
            {user["phone"]}
          </p>
          <p className="card-text">
            <span style={{ fontWeight: "bold" }}>Web Site: </span>
            <a href={user["website"]}>{user["website"]}</a>
          </p>
          <p className="card-text">
            <span style={{ fontWeight: "bold" }}>Company: </span>
            <a>
              {user["company"]["name"]}, {user["company"]["catchPhrase"]},
              {user["company"]["bs"]}
            </a>
          </p>
          <a onClick={handleOnClick} className="btn btn-secondary">
            Show Posts
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserScreen;
