import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand
					href="/"
					style={{
						color: "#f00",
						marginBottom: "70px",
						opacity: 1,
					}}>
					CouOh
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
						<Nav.Link href="/">Home</Nav.Link>
						<NavDropdown title="쿠팡" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/CpProduct">상품목록</NavDropdown.Item>
							<NavDropdown.Item href="/CpProduct/:ProductId">상품보기</NavDropdown.Item>
							<NavDropdown.Item href="/CpProduct/create">상품등록</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="오늘의집" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/OhProduct">상품목록</NavDropdown.Item>
							<NavDropdown.Item href="/OhProduct/:ProductId">상품보기</NavDropdown.Item>
							<NavDropdown.Item href="/OhProduct/create">상품등록</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="CONTACT" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">E-MAIL</NavDropdown.Item>
							<NavDropdown.Item href="#action4">MOBILE</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link a href="https://www.coupang.com/" able>
							쿠팡 연결하기
						</Nav.Link>
						<Nav.Link href="https://ohou.se/" able>
							오늘의집 연결하기
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavScrollExample;
