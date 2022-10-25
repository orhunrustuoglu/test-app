import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import UsersScreen from "../screens/UsersScreen";
import UserScreen from "../screens/UserScreen";
import PostsScreen from "../screens/PostsScreen";

function MyNavbar() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/home"}>
            Bootstrap-Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/users"}>
              Users
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/users" element={<UsersScreen />} />
        <Route path="/users/:id" element={<UserScreen />} />
        <Route path="/users/:id/posts" element={<PostsScreen />} />
      </Routes>
    </Router>
  );
}

export default MyNavbar;
