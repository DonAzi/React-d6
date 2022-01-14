import React from "react";
import { useState } from "react";
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

const Home = ({ card }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row className="">
            <Col className=" d-flex justify-content-around">
              <Form.Group className="formBasicEmail">
                <FormLabel className="text-primary h2"> Search here</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Your books"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="">
            {card
              .filter(
                (
                  b //searchQuery begins here with tricks and headaches
                ) => b.title.toLowerCase().includes(searchQuery)
              )
              .map((b) => (
                <Col key={b.asin} xl={4} xs={12} sm={6} className="my-3">
                  <Singlebook
                    book={b}
                    selectedCard={selectedCard} //hoooooooooooooooks
                    changeSelectedCard={(asin) => setSelectedCard(asin)}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <div className="d-block-flex mt-5 ml-5">
            <h4> ID : {selectedCard}</h4>
            <CommentArea asin={selectedCard} />
          </div>
          {/* {selected && <CommentArea asin={this.props.book.asin} />} */}
        </Col>
      </Row>
    </Container>
  );
};

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
