import { Component } from "react";
import { Form, Col } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [], // we will receive comments to this array and pass to where necessary
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMDAzOTY4YjNlMDAwMTViN2FjYjEiLCJpYXQiOjE2MzkwNTU0MTgsImV4cCI6MTY0MDI2NTAxOH0.XTaSP1lDIsQ_Ug_tZNsfvN_fuvKMP8Jx1AsQTiyG7VA" +
              this.props.asin,
          },
        }
      );

      let comments = await response.json();
      this.state({ comments: comments });
    } catch (error) {
      console.log(error);
    }
  };
  //rendering will be after fetch complete
  render() {
    return (
      <>
        <Form.Row>
          <Form.Label column lg={2}></Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Comment" />
          </Col>
        </Form.Row>
        <br />
      </>
    );
  }
}

export default CommentArea;
