import React from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col className="my-2">
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            border: this.state.selected ? "2px solid red" : "none",
          }}
        >
          <Card.Img
            className="img-fluid"
            style={{
              height: 300,
              objectFit: "cover",
            }}
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title className=" text-dark text-truncate">
              {this.props.book.title}
            </Card.Title>
            {/* <Button variant="primary"></Button> */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
