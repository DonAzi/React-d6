import { Form, Col, Button } from "react-bootstrap";
import React from "react";

class CommentArea extends React.Component {
  state = {
    comments: [], // we will receive comments to this array and pass to where necessary
  };

  componentDidMount = async () => {
    console.log(JSON.stringify(this.props));
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE4MjI3NzQsImV4cCI6MTY0MzAzMjM3NH0.a7fBnNPGw-LxNNLCAXWwzgZOYXWy-7wlM1neISqASIg",
          },
        }
      );

      let comments = await response.json();
      this.setState({ comments: this.state.comments });
      console.log(comments);
    } catch (error) {
      console.log(error);
    }
  };

  //rendering will be after fetch complete
  render() {
    return (
      <>
        <Form.Row>
          <Form.Control type="text" placeholder="Comment" />
          <Col>
            {this.state.comments.map((com) => (
              <div> {com.comment}</div>
            ))}
            <Button
              onClick={() => {
                postComment(this.props.elementId, "hi");
              }}
            >
              submit
            </Button>
          </Col>
        </Form.Row>
        <br />
      </>
    );
  }
}

const postComment = async (asin, comment) => {
  try {
    await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        elementId: asin,
        rate: 1,
        comment: comment,
      }),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMDAzOTY4YjNlMDAwMTViN2FjYjEiLCJpYXQiOjE2MzkwNTU0MTgsImV4cCI6MTY0MDI2NTAxOH0.XTaSP1lDIsQ_Ug_tZNsfvN_fuvKMP8Jx1AsQTiyG7VA",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default CommentArea;
