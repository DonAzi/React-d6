import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import MyBadge from "./MyBadge";

class SingleBook extends React.Component {
  //
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Row>
          <Col>
            <Card
              onClick={() =>
                this.props.changeSelectedCard(this.props.book.asin)
              }
              style={
                {
                  // opacity: this.state.selected ? "0.5" : "1",
                }
              }
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
                <MyBadge text="info" color={"secondary"} />
                <Button
                  className="bg-primary btn-sm mx-1"
                  onClick={() =>
                    this.setState({ selected: !this.state.selected })
                  }
                >
                  Comment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default SingleBook;

// {this.state.selected && <CommentArea />}
