import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar className="mb-4" bg="warning">
        <Container>
          <Navbar.Brand>
            <Link to="/">Book Store</Link>
          </Navbar.Brand>
          <p>0 Produkte im Warenkorb</p>
        </Container>
      </Navbar>
    </div>
  );
}
