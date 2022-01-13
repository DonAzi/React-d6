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
import CommentArea from "./CommentArea";

class Home extends React.Component {
  state = {
    searchQuery: "",

    selectedCard: null,
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Row className="">
              <Col className=" d-flex justify-content-around">
                <Form.Group className="formBasicEmail">
                  <FormLabel className="text-primary h2">
                    {" "}
                    Search here
                  </FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Your books"
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="">
              {this.props.card
                .filter(
                  (
                    b //searchQuery begins here with tricks ßand headaches
                  ) => b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xl={4} xs={12} sm={6} className="my-3">
                    <Singlebook
                      book={b}
                      changeSelectedCard={(asin) => {
                        console.log("TEST for TEST 55");
                        this.setState({ ...this.state, selectedCard: asin });
                        console.log(this.state);
                      }}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Gossips</h1>
            <CommentArea asin={this.state.selectedCard} />
            {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
          </Col>
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
