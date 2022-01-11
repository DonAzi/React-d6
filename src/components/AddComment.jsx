import React, { Component } from "react";
import { Button, Form } from "bootstrap";

class AddComments extends Component {
  state = {
    //these to hold the (dynamic) data but are empty
    comments: {
      comments: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  sendComment = async (e) => {
    e.preventDefault(); //not sure why is it here, but dont worry will find out soon...

    try {
      let DataFromBackStreet = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comments),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE4MjI3NzQsImV4cCI6MTY0MzAzMjM3NH0.a7fBnNPGw-LxNNLCAXWwzgZOYXWy-7wlM1neISqASIg",
          },
        }
      );

      if (DataFromBackStreet.ok) {
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
              value={this.state.comments.comments}
              onChange={(e) =>
                this.setState({
                  comments: {
                    //   did not understand much of spread op
                    ...this.state.comments,
                    comments: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comments.rate}
              onChange={(e) =>
                this.setState({
                  //   did not understand much of spread op
                  comments: { ...this.state.comments, rate: e.target.value },
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
