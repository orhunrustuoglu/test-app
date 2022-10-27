import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

var Blur = require("react-blur");

function HomeScreen() {
  const navigate = useNavigate();
  const goToUsersScreen = useCallback(
    () => navigate("/users", { replace: true }),
    [navigate]
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1600933435972-e4a4a40a4abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="jumbotron jumbotron-fluid" style={{ width: "100%" }}>
        <div
          className="container"
          style={{
            backgroundColor: "#383E42",
            paddingTop: 50,
            paddingBottom: 35,
            opacity: 0.85,
            borderRadius: 16,
          }}
        >
          <h1 className="display-4" style={{ color: "#FFFFFF" }}>
            Welcome to the Test App!
          </h1>
          <p className="lead" style={{ color: "#FFFFFF" }}>
            This is a testing app requested from Altosis in order to see my
            limits.
            <br />
            Please visit the
            <strong onClick={goToUsersScreen}>
              {" "}
              <a style={{ textDecorationLine: "underline" }}>Users</a>{" "}
            </strong>
            tab above.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
