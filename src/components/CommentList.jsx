import { ListGroup } from "react-bootstrap";

import { SingleComment } from "./SingleComment.jsx";

const CommentList = ({ commentShow }) => (
  <ListGroup style={{ color: "black" }}>
    {commentShow.map((com) => (
      <SingleComment comment={com} key={com._id} />
    ))}
  </ListGroup>
);

export default CommentList;
