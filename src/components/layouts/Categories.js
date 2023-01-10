import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faBook,
  faGamepad,
  faClapperboard,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Categories({ setFilterKey }) {
  const [key, setKey] = useState("all");
  const { t } = useTranslation();

  useEffect(() => {
    setFilterKey(key);
  }, [key, setFilterKey]);

  return (
    <Nav className="flex-column">
      <div className=" fs-4">{t("categories")}</div>
      <Nav.Link
        onClick={(e) => setKey("all")}
        className={key === "" || key === "all" ? "" : "link-secondary"}
      >
        <FontAwesomeIcon icon={faBorderAll} />{" "}
        <span className="ms-2"> {t("all")}</span>
      </Nav.Link>
      <Nav.Link
        onClick={(e) => setKey("book")}
        className={key === "book" ? "" : "link-secondary"}
      >
        <FontAwesomeIcon icon={faBook} />{" "}
        <span className="ms-2"> {t("books")}</span>
      </Nav.Link>
      <Nav.Link
        onClick={(e) => setKey("game")}
        className={key === "game" ? "" : "link-secondary"}
      >
        <FontAwesomeIcon icon={faGamepad} />
        <span className="ms-1"> {t("games")}</span>
      </Nav.Link>
      <Nav.Link
        onClick={(e) => setKey("movie")}
        className={key === "movie" ? "" : "link-secondary"}
      >
        <FontAwesomeIcon icon={faClapperboard} />
        <span className="ms-2"> {t("movies")}</span>
      </Nav.Link>
      <Nav.Link
        onClick={(e) => setKey("cartoon")}
        className={key === "cartoon" ? "" : "link-secondary"}
      >
        <FontAwesomeIcon icon={faFilm} />
        <span className="ms-2"> {t("cartoons")}</span>
      </Nav.Link>
    </Nav>
  );
}
