import React from "react";
import AddComments from "./AddComment";
import CommentList from "./CommentList";
import Error from "./Error";

class CommentArea extends React.Component {
  state = {
    comments: [], // we will receive comments to this array and pass to where necessary
    isError: false,
  };

  fetchData = async (asin) => {
    // console.log(JSON.stringify(this.props));
    // console.log(this.props);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE5MzI0MTgsImV4cCI6MTY0MzE0MjAxOH0.i0D32_MiWljqUQyXC2j4CL0V4tMZRe9MbB5c64-eIwY",
          },
        }
      );
      if (response.ok) {
        let commentsFromBackEnd = await response.json();
        this.setState({ comments: commentsFromBackEnd, isError: false });
        console.log("==================TEST", commentsFromBackEnd);
      } else {
        console.log("error");
        this.setState({ isError: true });
      }
    } catch (error) {
      this.setState({ isError: true }); //why it did not work
      alert(error);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      console.log("The previous asin", prevProps);
      console.log("The current asin", this.props.asin);
      this.fetchData(this.props.asin);

      //fetch the comments
      //set the state with the comments
      //
      console.log("heloo TEST line 48");
    }
  }

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
