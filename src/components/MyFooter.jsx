import React from "react";

export default function MyFooter() {
  return (
    <footer
      className="bg-dark "
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        padding: "1.2rem",
      }}
    >
      <span className=" d-flex text-centre">
        <strong>Strivers</strong> <br />{" "}
        <a href="https://react-bootstrap.netlify.app/components/navbar/#brand">
          Learn more about React Bootstrap
        </a>
      </span>
    </footer>
  );
}
