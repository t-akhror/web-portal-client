import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const element = <FontAwesomeIcon icon={faHouse} />;
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col md={12} className="text-center">
          <div className="page-not-found text-body-tertiary my-5 ">
            404 <br /> {t("pageNotFound")}
          </div>
          <div className="mt-3">
            {" "}
            <Link to="/" className="text-decoration-none text-secondary">
              {" "}
              {element}
              <span className="me-3"> {t("back2HomePage")}</span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
