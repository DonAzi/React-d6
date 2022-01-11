import React from "react";
import AddComments from "./AddComment";
import CommentList from "./CommentList";

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

// const postComment = async (asin, comment) => {
//   try {
//     await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
//       method: "POST",
//       body: JSON.stringify({
//         elementId: asin,
//         rate: 1,
//         comment: comment,
//       }),
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE4MjI3NzQsImV4cCI6MTY0MzAzMjM3NH0.a7fBnNPGw-LxNNLCAXWwzgZOYXWy-7wlM1neISqASIg",
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export default CommentArea;
