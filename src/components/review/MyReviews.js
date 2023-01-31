import React, { useEffect } from "react";
import { format } from "date-fns";
import BootstrapTable from "react-bootstrap-table-next";
import Container from "react-bootstrap/esm/Container";

import { useTranslation } from "react-i18next";
import { useReviewContext } from "../../hooks/useReviewsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

function MyReviews() {
  const { myReviews, dispatch } = useReviewContext();
  const { user } = useAuthContext();
  const { t } = useTranslation();

  // SLICE description function
  function descrFormatter(cell, row) {
    return cell.slice(0, 30);
  }
  // REFORMAT created Date
  function dateFormatter(cell, row) {
    const date = new Date(cell);
    return format(date, "P. k:m");
  }

  const columns = [
    {
      dataField: "title",
      text: t("title"),
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "category",
      text: t("category"),
      sort: true,
      filter: textFilter(),
      style: {
        width: "40px",
      },
    },
    {
      dataField: "description",
      text: t("description"),
      formatter: descrFormatter,
    },
    {
      dataField: "rating",
      text: t("rate"),
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "numReviews",
      text: t("comments"),
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "createdAt",
      text: t("createdAt"),
      sort: true,
      formatter: dateFormatter,
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  useEffect(() => {
    const fetchReview = async () => {
      const response = await fetch(
        "https://reviews-3hiw.onrender.com/api/reviews/",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "MY_REVIEW", payload: json });
      }
    };
    if (user) {
      fetchReview();
    }
  }, [dispatch, user]);

  return (
    <Container className="p-3 ">
      <div className="fs-1 my-4 text-center text-primary-emphasis ">
        {t("myReviews")}
      </div>
      <div className="my-3 shadow p-3 bg-body shadow-sm-color rounded border border-primary-subtle bg-light-subtle">
        {myReviews && (
          <BootstrapTable
            bootstrap4
            keyField="_id"
            columns={columns}
            data={myReviews}
            pagination={pagination}
            filter={filterFactory()}
            filterPosition="inline"
          />
        )}
      </div>
    </Container>
  );
}

export default MyReviews;
