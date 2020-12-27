import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { postUserCreate } from "../actions";
import { BackComponent } from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    postUsersCreate: state.users.postUsersCreate,
    errorCreate: state.users.errorCreate,
  };
};

class CreateContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if (this.props.postUsersCreate || this.props.errorCreate) {
      if (this.props.errorCreate) {
        // setTimeout(() => {
        //   swal(
        //     {
        //       title: "Wow!",
        //       text: "Message!",
        //       type: "error",
        //     },
        //     () => {
        //       window.location.href = "/";
        //     }
        //   );
        // }, 1000);
        swal({
          title: "Failed!",
          text: this.props.errorCreate,
          icon: "error",
        }).then((okay) => {
          if (okay) {
            window.location.href = "/";
          }
        });
      } else {
        swal({
          title: "Success!",
          text: "User Has Been Created",
          icon: "success",
        }).then((okay) => {
          if (okay) {
            window.location.href = "/";
          }
        });
      }
    }
    return (
      <Container>
        <h1 className="mb-5">Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        <BackComponent />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateContainer);
