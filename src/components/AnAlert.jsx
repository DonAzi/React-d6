import { Alert } from "react-bootstrap";

const AnAlert = (props) => (
  <Alert className="m-0" variant="danger">
    {props.text}
  </Alert>
);

export default AnAlert;
