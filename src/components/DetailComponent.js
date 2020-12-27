import React from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorDetail: state.users.errorDetail,
  };
};

function DetailComponent(props) {
  return (
    <Container className="mt-5">
      <Row xs="1" sm="2" md="3">
        <Col>
          {props.getUsersDetail ? (
            <Table dark striped hover>
              <tbody>
                <tr>
                  <th scope="row" width="100">
                    Id
                  </th>
                  <td width="50">:</td>
                  <td>{props.getUsersDetail.id}</td>
                </tr>
                <tr>
                  <th scope="row" width="100">
                    Name
                  </th>
                  <td width="50">:</td>
                  <td>{props.getUsersDetail.name}</td>
                </tr>
                <tr>
                  <th scope="row" width="100">
                    Age
                  </th>
                  <td width="50">:</td>
                  <td>{props.getUsersDetail.age}</td>
                </tr>
                <tr>
                  <th scope="row" width="100">
                    Address
                  </th>
                  <td width="50">:</td>
                  <td>{props.getUsersDetail.address}</td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <Table dark striped hover>
              <tbody>
                <tr>
                  <th scope="row" width="100">
                    Id
                  </th>
                  <td width="50">:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row" width="100">
                    Name
                  </th>
                  <td width="50">:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row" width="100">
                    Age
                  </th>
                  <td width="50">:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row" width="100">
                    Address
                  </th>
                  <td width="50">:</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps, null)(DetailComponent);
