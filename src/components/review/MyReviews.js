import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Container from "react-bootstrap/esm/Container";
// import Table from "react-bootstrap/Table";
import { useReviewContext } from "../../hooks/useReviewsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, {
  textFilter,
  dateFilter,
} from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
// import { Eye, Pencil, Trash3 } from "react-bootstrap-icons";

function MyReviews() {
  const { reviews, dispatch } = useReviewContext();
  const { user } = useAuthContext();

  // SLICE description function
  function descrFormatter(cell, row) {
    return cell.slice(0, 30);
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
      formatter: (cell) => cell.toString(),
      filter: dateFilter(),
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
      const response = await fetch("/api/reviews", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_REVIEW", payload: json });
      }
    };
    if (user) {
      fetchReview();
    }
  }, [dispatch, user]);

  return (
    <Container className="bg-white p-3">
      <div className="fs-3 mb-3 text-center ">My reviews</div>

      <BootstrapTable
        bootstrap4
        keyField="_id"
        columns={columns}
        data={reviews}
        pagination={pagination}
        filter={filterFactory()}
        filterPosition="inline"
      />

      {/* <div className="res-table">
        <Table variant="bg-white" className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th> Brand</th>
              <th>Image</th>
              <th>Category</th>
              <th>Description</th>
              <th>Rate</th>
              <th>Comments</th>

              <th>Created at</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {reviews &&
              reviews.map((review, index) => (
                <tr key={review._id}>
                  <td>{index + 1}</td>
                  <td>{review.title}</td>
                  <td>{review.brand}</td>
                  <td>{review.image}</td>
                  <td>{review.category}</td>
                  <td>{review.description.slice(0, 50)}</td>
                  <td>{review.rating}</td>
                  <td>{review.numReviews}</td>
                  <td>{review.createdAt}</td>
                  <td>
                    <Eye className="text-info" />
                    <Pencil className="text-warning" />{" "}
                    <Trash3 className="text-danger" />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div> */}
    </Container>
  );
}

export default MyReviews;
