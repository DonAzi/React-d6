import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import Singlebook from "./SingleBook";

class Home extends React.Component {
  state = { searchQuery: "" };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group className="formBasicEmail">
              <FormLabel>Search</FormLabel>
              <FormControl
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-4" xs={2} md={4}>
          {this.props.card
            .filter(
              (
                b //searchQuery begins here with tricks ßand headaches
              ) => b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col className="my-3">
                <Singlebook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default Home;

/* <Card className="my-2">
  <Card.Img
    className="img-fluid"
    style={{
      height: 300,
      objectFit: "cover",
    }}
    variant="top"
    src={item.img}
  />
  <Card.Body>
    <Card.Title className="text-truncate">
      {item.title}
    </Card.Title>
    <Button
      className="btn-sm ml-5 font-weight-bolder"
      variant="success"
    >
      Order now
    </Button>
  </Card.Body>
</Card> */
