import React, { useEffect } from "react";
import { format } from "date-fns";
import BootstrapTable from "react-bootstrap-table-next";
import Container from "react-bootstrap/esm/Container";

import { useReviewContext } from "../../hooks/useReviewsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import { SERVER_KEY } from "../../api/api";
// import { Eye, Pencil, Trash3 } from "react-bootstrap-icons";

function MyReviews() {
  const { myReviews, dispatch } = useReviewContext();
  const { user } = useAuthContext();

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
      text: "Title",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "category",
      text: "Category",
      sort: true,
      filter: textFilter(),
      style: {
        width: "40px",
      },
    },
    {
      dataField: "description",
      text: "Description",
      formatter: descrFormatter,
    },
    {
      dataField: "rating",
      text: "Rate",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "numReviews",
      text: "Comments",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "createdAt",
      text: "Created at",
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
        "https://reviews-3hiw.onrender.com/api/reviews",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        dispatch({ type: "MY_REVIEW", payload: json });
      }
    };
    if (user) {
      fetchReview();
    }
  }, [dispatch, user]);

  return (
    <Container className=" p-3 bg-dark-subtle">
      <div className="fs-3 mb-3 text-center ">My reviews</div>

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
    </Container>
  );
}

export default MyReviews;
