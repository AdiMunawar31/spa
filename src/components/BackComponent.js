import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col } from "reactstrap";

export const BackComponent = () => {
  return (
    <Row className="mb-5">
      <Col>
        <Link to={"/"}>
          <Button color="dark" size="sm">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
