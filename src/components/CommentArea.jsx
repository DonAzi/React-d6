import React from "react";
import AddComments from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends React.Component {
  state = {
    comments: [], // we will receive comments to this array and pass to where necessary
  };

  componentDidMount = async () => {
    // console.log(JSON.stringify(this.props));
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE5MzI0MTgsImV4cCI6MTY0MzE0MjAxOH0.i0D32_MiWljqUQyXC2j4CL0V4tMZRe9MbB5c64-eIwY",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let commentsFromBackEnd = await response.json();
        this.setState({ comments: commentsFromBackEnd });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //rendering will be after fetch complete
  render() {
    return (
      <>
        <AddComments asin={this.props.asin} />
        <CommentList commentShow={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
