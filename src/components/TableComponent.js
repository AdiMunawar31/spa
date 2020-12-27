import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import {
  faEdit,
  faInfo,
  faPlus,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUser } from "../actions";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      swal("Data!, Has Been Deleted!", {
        icon: "success",
      });
    } else {
      swal("Data!, Failed to Deleted!", {
        icon: "error",
      });
    }
  });
};

const sizePerPageRenderer = ({
  options,
  currSizePerPage,
  onSizePerPageChange,
}) => (
  <div className="btn-group" role="group">
    {options.map((option) => {
      const isSelect = currSizePerPage === `${option.page}`;
      return (
        <button
          key={option.text}
          type="button"
          onClick={() => onSizePerPageChange(option.page)}
          className={`btn ${isSelect ? "btn-secondary" : "btn-warning"}`}
        >
          {option.text}
        </button>
      );
    })}
  </div>
);

const options = {
  sizePerPageRenderer,
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsers: state.users.getUsers,
    error: state.users.error,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "Id",
      headerStyle: () => {
        return { backgroundColor: "#161b22", width: "5%", color: "#c7cfd7" };
      },
      sort: true,
    },
    {
      dataField: "name",
      text: "Name Users",
      headerStyle: () => {
        return { backgroundColor: "#161b22", color: "#c7cfd7" };
      },
      sort: true,
    },
    {
      dataField: "address",
      text: "Address Users",
      headerStyle: () => {
        return { backgroundColor: "#161b22", color: "#c7cfd7" };
      },
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { backgroundColor: "#161b22", color: "#c7cfd7" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"/detail/" + row.id}>
              <Button color="success" className="mr-2" size="sm">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
            <Link to={"/edit/" + row.id}>
              <Button color="primary" size="sm" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
            <Button
              color="danger"
              size="sm"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Container className="pt-4">
        {props.getUsers ? (
          <ToolkitProvider
            bootstrap4
            classes="bg-dark text-light"
            keyField="id"
            data={props.getUsers}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <Row>
                  <Col>
                    <Link to={"/create"}>
                      <Button color="dark" size="sm">
                        <FontAwesomeIcon icon={faUserPlus} /> Create Users
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <div className="float-right">
                      <SearchBar
                        {...props.searchProps}
                        className="bg-dark text-light"
                      />
                    </div>
                  </Col>
                </Row>
                <BootstrapTable
                  {...props.baseProps}
                  bootstrap4
                  classes="bg-dark text-light"
                  pagination={paginationFactory(options)}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-danger text-center mt-5">
            {props.error ? (
              <h1>{props.error}</h1>
            ) : (
              <h1>
                <Spinner color="danger" />
              </h1>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
