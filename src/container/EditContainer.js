import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getUserDetail, putUserUpdate } from "../actions";
import { BackComponent } from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    putUsersEdit: state.users.putUsersEdit,
    errorEdit: state.users.errorEdit,
  };
};

class EditContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.putUsersEdit || this.props.errorEdit) {
      if (this.props.errorEdit) {
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
          text: this.props.errorEdit,
          icon: "error",
        }).then((okay) => {
          if (okay) {
            window.location.href = "/";
          }
        });
      } else {
        swal({
          title: "Success!",
          text: "User Has Been Updated",
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
        <h1 className="mb-4">Edit Users</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        <BackComponent />
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(EditContainer);
