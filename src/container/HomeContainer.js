import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, setUserDetail } from "../actions";
import TableComponent from "../components/TableComponent";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUser());
    this.props.dispatch(setUserDetail());
  }
  render() {
    return (
      <div>
        <TableComponent users={this.props.users} />
      </div>
    );
  }
}
export default connect()(HomeContainer);
