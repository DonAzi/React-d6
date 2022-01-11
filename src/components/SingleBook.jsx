import React from "react";
import { Button, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import MyBadge from "./MyBadge";

class SingleBook extends React.Component {
  //

  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
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
            <MyBadge text="info" color={"secondary"} />
            <Button
              className="bg-primary btn-sm mx-1"
              onClick={() => this.setState({ selected: !this.state.selected })}
            >
              Comment
            </Button>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </>
    );
  }
}

export default SingleBook;

// {this.state.selected && <CommentArea />}
