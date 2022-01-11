import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComments extends Component {
  state = {
    //these to hold the (dynamic) data but are empty
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      });
    }
  }

  sendComment = async (e) => {
    e.preventDefault();

    try {
      let DataFromBackStreet = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE5MzI0MTgsImV4cCI6MTY0MzE0MjAxOH0.i0D32_MiWljqUQyXC2j4CL0V4tMZRe9MbB5c64-eIwY",
          },
        }
      );

      if (DataFromBackStreet.ok) {
        console.log("TEST one more TEST");
        alert("Comment has been added !");
      } else {
        console.log("error");
        alert("Something is wrong, but what is it interesting...");
      }
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Thoughts here..."
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    //   did not understand much of spread op
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  //   did not understand much of spread op
                  comment: { ...this.state.comment, rate: e.target.value },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            SUBMIT
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComments;