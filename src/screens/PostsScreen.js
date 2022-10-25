import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PostsScreen() {
  const [isLoading, setLoading] = useState(true); //for ui give feedback while fetching data
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //for pagination

  var userId = window.location.href.substring(
    window.location.href.length - 7,
    window.location.href.length - 6
  ); //userId fetched this way because or else strict mode renders twice and route gets corrupted

  useEffect(() => {
    //first get posts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
        //convert object
      })
      .then((data) => {
        //filter posts accordingly to the previously selected user
        setPosts(data.filter((p) => p["userId"] == userId));
      })
      .then((_) => {
        //fetch all the comments, filtering will be handled within the post's card
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((response) => {
            return response.json(); //convert the object
          })
          .then((data) => {
            setComments(data);
            setLoading(false);
          });
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

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Accordion style={{ width: 500 }}>
          {posts
            .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
            .map((post, index) => {
              return (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>
                    <p>
                      <strong>
                        {post.title.charAt(0).toUpperCase() +
                          post.title.slice(1)}
                      </strong>
                      <br />
                      {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    {comments
                      .filter((c) => c.postId == post.id)
                      .map((comment) => {
                        return (
                          <Card body>
                            <p>
                              <a style={{ fontSize: 14 }}>
                                <strong>
                                  {comment.name.charAt(0).toUpperCase() +
                                    comment.name.slice(1)}
                                </strong>
                              </a>
                              <br />
                              <a style={{ fontSize: 10, color: "grey" }}>
                                {comment.email.charAt(0).toLowerCase() +
                                  comment.email.slice(1)}
                              </a>
                              <br />
                              <a
                                style={{
                                  fontSize: 12,
                                  color: "grey",
                                }}
                              >
                                {comment.body.charAt(0).toUpperCase() +
                                  comment.body.slice(1)}
                              </a>
                            </p>
                          </Card>
                        );
                      })}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
        </Accordion>
      </div>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        {currentPage > 1 ? (
          <Button
            style={{
              marginRight: "10px",
            }}
            variant="outline-dark"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {"<"}
          </Button>
        ) : (
          <div />
        )}

        <a
          style={{
            textAlign: "center",
          }}
        >
          <a
            style={{
              fontSize: 18,
            }}
          >
            <strong>{currentPage}</strong>
          </a>
        </a>
        {currentPage < posts.length / 5 ? (
          <Button
            style={{
              marginLeft: "10px",
            }}
            variant="outline-dark"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            {">"}
          </Button>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}

export default PostsScreen;
