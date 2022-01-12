import React from "react";
import AddComments from "./AddComment";
import CommentList from "./CommentList";
import Error from "./Error";

class CommentArea extends React.Component {
  state = {
    comments: [], // we will receive comments to this array and pass to where necessary
    isError: false,
  };

  componentDidMount = async () => {
    // console.log(JSON.stringify(this.props));
    // console.log(this.props);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer Don.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE5MzI0MTgsImV4cCI6MTY0MzE0MjAxOH0.i0D32_MiWljqUQyXC2j4CL0V4tMZRe9MbB5c64-eIwY",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let commentsFromBackEnd = await response.json();
        this.setState({ comments: commentsFromBackEnd, isError: false });
      } else {
        console.log("error");
        this.setState({ isError: true });
      }
    } catch (error) {
      this.setState({ isError: true }); //why it did not work
      alert(error);
    }
  };

  render() {
    return (
      <>
        {/* this.state.isError is not working?? */}
        {this.state.isError && <Error />}
        <AddComments asin={this.props.asin} />
        <CommentList commentShow={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
