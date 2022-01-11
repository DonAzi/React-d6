import { ListGroup } from "bootstrap";

import SingleComment from "./SingleComment";

const CommentList = ({ commentShow }) => {
  <ListGroup style={{ color: "black" }}>
    {commentShow.map((com) => (
      <SingleComment comment={com} key={com._id} />
    ))}
  </ListGroup>;
};

export default CommentList;
