import { Nav } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <Nav
      className="bg-dark p-2"
      // style={{ position: "fixed", top: "0", width: "100%" }}
      variant="light"
      expand="lg"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Browse</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MyNavBar;
