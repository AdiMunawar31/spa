import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getUserDetail } from "../actions";
import { BackComponent } from "../components/BackComponent";
import DetailComponent from "../components/DetailComponent";

class DetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  render() {
    return (
      <Container>
        <h1>Detail Users</h1>
        <DetailComponent />
        <BackComponent />
      </Container>
    );
  }
}

export default connect()(DetailContainer);
