import { Jumbotron, Button } from "react-bootstrap";

const MyJumbotron = () => {
  return (
    <Jumbotron className="bg-dark">
      <h1>Hello, React!</h1>
      <h3>Welcome</h3>
      <p>
        <Button href="https://github.com/DonAzi/react-d2" variant="primary">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};
export default MyJumbotron;
