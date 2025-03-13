import Link from "next/link"
import { Container, Nav, Navbar } from "react-bootstrap"

export default function MainNav() {
    return (
        <>
            <Navbar expand="lg" className="navbar-dark bg-dark fixed-top">
                <Container>
                    <Navbar.Brand>Roshis Rai</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" passHref legacyBehavior>
                            <Nav.Link>Listings</Nav.Link>
                        </Link>
                        <Link href="/about" passHref legacyBehavior>
                            <Nav.Link>About</Nav.Link>
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    )
}